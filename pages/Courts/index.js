import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { ILCourtBG } from '../../assets';
import { colors } from '../../utils';
import { ListCourt } from '../../components';
import { DummyCourt1, DummyCourt2, DummyCourt3 } from '../../assets';

export default function Courts() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILCourtBG} style={styles.background}>
        <Text style={styles.title}>Pengadilan Agama Wilayah PTA Makassar</Text>
        <Text style={styles.desc}>22 Pengadilan Agama</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListCourt
          type="Pengadilan Pertama Kelas I A"
          name="Pengadilan Agama Watampone"
          address="Jln. Yos Sudarso"
          pic={DummyCourt1}
        />
        <ListCourt
          type="Pengadilan Tingkat Banding"
          name="Pengadilan Tinggi Agama Makassar"
          address="Jln. Makassar"
          pic={DummyCourt2}
        />
        <ListCourt
          type="Pengadilan Tingkat Banding"
          name="Pengadilan Tinggi Agama Makassar"
          address="Jln. Makassar"
          pic={DummyCourt3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    marginTop: 70,
  },
  desc: {
    fontSize: 14,
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
