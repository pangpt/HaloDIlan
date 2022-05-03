import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import { ILNullPhoto } from '../../../assets';

export default function Other({ text, date }) {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
    marginRight: 120,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    // maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
});
