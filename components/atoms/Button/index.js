import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';

export default function Button({ type, title, onPress, icon, disable }) {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  text: (type) => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
  disableText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.button.disable.text,
  },
});
