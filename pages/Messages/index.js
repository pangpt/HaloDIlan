import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { List } from '../../components';
import { colors, getData } from '../../utils';
import { Fire } from '../../config';

export default function Messages({ navigation }) {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidOfficer = `officers/${oldData[key].uidPartner}`;
          const detailOfficer = await rootDB.child(urlUidOfficer).once('value');
          data.push({
            id: key,
            detailOfficer: detailOfficer.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {historyChat.map((chat) => {
          const dataOfficer = {
            id: chat.detailOfficer.uid,
            data: chat.detailOfficer,
          };
          return (
            <List
              key={chat.id}
              name={chat.detailOfficer.fullName}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataOfficer)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    // borderBottomLeftRadius: 20,
    // borderBottomRaightRadius: 20,
  },
  title: {
    fontSize: 12,
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
