import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DummyOfficer1, IconRemovePhoto, ILNullPhoto } from '../../../assets';
import { colors } from '../../../utils';

export default function Profile({ name, desc, isRemove }) {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={ILNullPhoto} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.remove} />}
      </View>
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
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    color: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
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
