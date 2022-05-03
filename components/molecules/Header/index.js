import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconBackDark } from '../../../assets';
import { Gap, Button } from '../../atoms';
import { colors } from '../../../utils';
import DarkProfile from './DarkProfile';

export default function Header({ onPress, type, title, desc }) {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} title={title} desc={desc} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
