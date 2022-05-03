import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

export default function ListCourt({ type, name, address, pic }) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.picture} />
      <View>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 65,
    height: 75,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 6,
  },
});
