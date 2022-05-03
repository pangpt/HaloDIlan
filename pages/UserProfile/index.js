import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, Profile, List, Gap } from '../../components';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import { colors, getData } from '../../utils';

export default function UserProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: '',
    category: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setProfile(data);
    });
  });
  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profil Pengguna" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile name={profile.fullName} desc={profile.category} />
      )}
      <Gap height={14} />
      <List
        name="Ubah Profil"
        desc="Terakhir diubah kemarin"
        type="next"
        icon="edit-profile"
        // onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Keluar"
        desc="Terakhir diubah kemarin"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
