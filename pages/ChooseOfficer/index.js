import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, List } from '../../components';
import { DummyOfficer1, DummyOfficer2, ILNullPhoto } from '../../assets';
import { colors } from '../../utils';
import { Fire } from '../../config';
import { database } from 'firebase';

export default function ChooseOfficer({ navigation, route }) {
  const [listOfficer, setListOfficer] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    callOfficerByCategory(itemCategory.category);
  }, []);

  const callOfficerByCategory = (category) => {
    Fire.database()
      .ref('officers/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        // console.log('data list officer :', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          // console.log('parse list officer :', data);
          setListOfficer(data);
        }
      });
  };
  return (
    <View style={styles.apge}>
      <Header
        type="dark"
        title="Pilih Petugas"
        onPress={() => navigation.goBack()}
      />
      {listOfficer.map((officer) => {
        return (
          <List
            key={officer.id}
            type="next"
            profile={ILNullPhoto}
            name={officer.data.fullName}
            desc={officer.data.gender}
            onPress={() => navigation.navigate('OfficerProfile', officer)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
