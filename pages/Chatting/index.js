import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { ChatItem, Header, InputChat } from '../../components';
import {
  colors,
  showError,
  getData,
  getChatTime,
  setDateChat,
} from '../../utils';
import { Fire } from '../../config';

export default function Chatting({ navigation, route }) {
  const dataOfficer = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataOfficer.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allchat/`;
    console.log('isinya :', chatID);

    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        //fungsi realtime
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [dataOfficer.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      console.log('user login: ', res);
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();
    //kirim ke firebase
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${dataOfficer.data.uid}`;

    console.log('data yang dikirim: ', chatID);
    const urlFirebase = `chatting/${chatID}/allchat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageOfficer = `messages/${dataOfficer.data.uid}/${chatID}`;
    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataOfficer.data.uid,
    };
    const dataHistoryChatForOfficer = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');

        //set history for user
        Fire.database().ref(urlMessageUser).set(dataHistoryChatForUser);

        //for Officer
        Fire.database().ref(urlMessageOfficer).set(dataHistoryChatForOfficer);
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataOfficer.data.fullName}
        desc={dataOfficer.data.category}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  // console.log('isinya apa:', isMe);
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={chatSend}
        targetChat={dataOfficer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});
