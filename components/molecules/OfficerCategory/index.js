import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ILCatAkta, ILCatPerkara, ILCatSarana } from '../../../assets';
import { colors } from '../../../utils';

export default function OfficerCategory({ category, onPress }) {
  const Icon = () => {
    if (category === 'informasi akta cerai') {
      return <ILCatAkta style={styles.illustration} />;
    }
    if (category === 'informasi perkara') {
      return <ILCatPerkara style={styles.illustration} />;
    }
    if (category === 'informasi sarana') {
      return <ILCatSarana style={styles.illustration} />;
    }
    return <ILCatSarana style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      {/* <Text style={styles.label}>Saya butuh</Text> */}
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    color: colors.text.primary,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
});
