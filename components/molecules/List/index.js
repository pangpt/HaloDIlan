import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import {
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
  ILNullPhoto,
} from '../../../assets';

export default function List({ name, desc, type, onPress, icon }) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={ILNullPhoto} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {/* {type === 'next' && <IconNext />} */}
      <IconNext />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
