import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Button, Gap, Header, Input, Profile } from '../../components';

export default function UpdateProfile({ navigation }) {
  return (
    <View style={styles.page}>
      <Header title="Ubah Profil" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Input label="Nama Lengkap" />
          <Gap height={26} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Kategori Kelompok" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={24} />
          <Button title="Simpan" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
