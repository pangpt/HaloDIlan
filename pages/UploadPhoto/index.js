import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, Header, Link, Gap } from '../../components';
import { IconAddPhoto, ILNullPhoto, IconRemovePhoto } from '../../assets';
import { colors, storeData } from '../../utils';
import * as ImagePicker from 'expo-image-picker';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';

export default function UploadPhoto({ navigation, route }) {
  const { fullName, category, uid } = route.params;
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);

  const getImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      // setHasPhoto: true,
    });

    console.log(result);

    if (result.cancelled || result.error) {
      showMessage({
        message: 'Anda belum memilih foto',
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      });
    } else {
      console.log('response getImage :', result);
      const source = { uri: result.uri };

      setPhotoForDB(`data:${result.type};base64, ${result.data}`);

      setPhoto(source);
      setHasPhoto(true);
    }
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({ photo: photoForDB });

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.navigate('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Unggah Foto" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <>
              <Image source={photo} style={styles.avatar} />

              {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
              {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
            </>
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Unggah dan Lanjutkan"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Lewatkan"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: { width: 110, height: 100, borderRadius: 110 / 2 },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: { flex: 1, backgroundColor: colors.white },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    paddingBottom: 40,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
