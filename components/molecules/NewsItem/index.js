import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import { DummyNews1 } from '../../../assets';

export default function NewsItem({ title, date, image, onPress }) {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: '90%',
  },
  titleWrapper: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
