import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Header, Input, Button, Gap, Loading } from '../../components';
import { colors, storeData, useForm, showError } from '../../utils';
import { Fire } from '../../config';

export default function Register({ navigation }) {
  const [form, setForm] = useForm({
    fullName: '',
    category: 'Perempuan',
    phoneNumber: '',
    username: '',
    password: '',
  });

  const [itemCategory] = useState([
    {
      id: 1,
      label: 'Perempuan',
      value: 'perempuan',
    },
    {
      id: 2,
      label: 'Anak',
      value: 'anak',
    },
    {
      id: 3,
      label: 'Penyandang Disabilitas',
      value: 'penyandang disabilitas',
    },
    {
      id: 4,
      label: 'Lansia',
      value: 'lansia',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(
        form.username + '@gmail.com',
        form.password
      )
      .then((success) => {
        // Signed in
        setLoading(false);
        setForm('reset');
        //https://firebase.com/users/i39d2doif/
        const data = {
          fullName: form.fullName,
          category: form.category,
          username: form.username,
          phoneNumber: form.phoneNumber,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('MainApp', data);
      })
      .catch((err) => {
        setLoading(false);
        showError(err.message);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={40} />
            <Input
              label="Username"
              value={form.username}
              onChangeText={(value) => setForm('username', value)}
            />
            <Gap height={40} />
            <Input
              label="Kategori Kelompok Rentan"
              value={form.category}
              onValueChange={(value) => setForm('category', value)}
              select
              selectItem={itemCategory}
            />
            <Gap height={40} />
            <Input
              label="Nomor Telepon"
              value={form.phoneNumber}
              onChangeText={(value) => setForm('phoneNumber', value)}
            />
            <Gap height={40} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Selanjutnya" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: 40, paddingTop: 0, flex: 1 },
  page: { backgroundColor: colors.white, flex: 1 },
});
