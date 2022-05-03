import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, NewsContent, List, Gap } from '../../components';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import { colors } from '../../utils';
// import { Fire } from '../../config';

export default function News({ navigation }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        console.log('data :', res.val());
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Video Terbaru" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <NewsContent name="Steven" desc="PNS" />
      <Gap height={14} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
