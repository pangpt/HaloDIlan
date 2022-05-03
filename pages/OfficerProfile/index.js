import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';
import { Button } from '../../components/atoms';
import { ILNullPhoto } from '../../assets';

export default function OfficerProfile({ navigation, route }) {
  const dataOfficer = route.params;
  return (
    <View style={styles.page}>
      <Header
        title="Profil Petugas Informasi"
        onPress={() => navigation.goBack()}
      />
      <Profile
        name={dataOfficer.data.fullName}
        desc={dataOfficer.data.category}
      />
      <Gap height={10} />
      <ProfileItem label="Jenis Kelamin" value={dataOfficer.data.gender} />
      <ProfileItem label="Kode Petugas" value={dataOfficer.data.str_number} />
      <View style={styles.action}>
        <Button
          title="Mulai Percakapan"
          onPress={() => navigation.navigate('Chatting', dataOfficer)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
