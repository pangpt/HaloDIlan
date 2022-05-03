import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { colors, useForm, storeData, showError } from '../../utils';
import { Fire } from '../../config';
import { useDispatch } from 'react-redux';

export default function Login({ navigation }) {
  const emailAdd = '@gmail.com';

  const [form, setForm] = useForm({ phoneNumber: '', password: '' });
  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: 'SET_LOADING', value: true });
    Fire.auth()
      .signInWithEmailAndPassword(
        form.phoneNumber + '@gmail.com',
        form.password
      )
      .then((res) => {
        dispatch({ type: 'SET_LOADING', value: false });
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', value: false });
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai mengakses informasi</Text>
        <Input
          label="Username Anda"
          value={form.phoneNumber}
          onChangeText={(value) => setForm('phoneNumber', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        {/* <Gap height={10} /> */}
        {/* <Link title="Lupa Password" size={12} /> */}
        <Gap height={50} />
        <Button title="Masuk" onPress={login} />
        <Gap height={30} />
        <Link
          title="Buat Akun Baru"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: colors.white, flex: 1 },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 24,
    maxWidth: 253,
  },
});
