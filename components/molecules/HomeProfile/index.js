import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DummyUser, ILNullPhoto } from '../../../assets';
import { colors, getData } from '../../../utils';
import { useNavigation } from '@react-navigation/native';

export default function HomeProfile({ onPress, profile }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
