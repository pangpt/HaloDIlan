import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DummyOfficer1, IconRemovePhoto, ILNullPhoto } from '../../../assets';
import { colors } from '../../../utils';

export default function NewsContent({ name, desc }) {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 210,
    height: 210,
  },
  name: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  remove: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
