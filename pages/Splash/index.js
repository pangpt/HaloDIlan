import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { ILLogo } from '../../assets';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../utils';
import { Fire } from '../../config';

export default function Splash({ navigation }) {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          //user lagi login
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ILLogo />
      {/* <Text style={styles.title}>Halo-Dilan</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //full layar
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: colors.text.primary,
  },
});
