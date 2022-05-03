import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import { DummyOfficer3, ILNullPhoto } from '../../../assets';
import { Button } from '../../atoms';

export default function DarkProfile({ onPress, title, desc }) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={ILNullPhoto} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 16,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    marginTop: 2,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
});
