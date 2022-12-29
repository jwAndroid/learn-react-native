/**
 */

import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import RNFS from 'react-native-fs';

const App = () => {
  const [uri, setUri] = useState('');
  const [uri2, setUri2] = useState('');
  const [fileURI, setFileURI] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        const permission =
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }

        const status = await PermissionsAndroid.request(permission);

        return status === 'granted';
      }
    })();
  }, []);

  const onGetPhotos = useCallback(async () => {
    const result = await CameraRoll.getPhotos({first: 10, assetType: 'Photos'});

    if (result.edges[1].node.image.uri !== '') {
      setUri(result.edges[1].node.image.uri);
    }
  }, []);

  // const phPathToFilePath = async (uri: string) => {
  //   // let fileURI = encodeURI(uri);

  //   if (uri.startsWith('ph://')) {
  //     const copyPath = `${
  //       RNFS.DocumentDirectoryPath
  //     }/${new Date().toISOString()}.png`.replace(/:/g, '-');

  //     const fileURI = await RNFS.copyAssetsFileIOS(uri, copyPath, 360, 360);

  //     setFileURI(fileURI);
  //   }

  //   return fileURI;
  // };

  const convertFile = useCallback(
    async (uri: string) => {
      if (uri.startsWith('ph://')) {
        const copyPath = `${
          RNFS.DocumentDirectoryPath
        }/${new Date().toISOString()}.png`.replace(/:/g, '-');

        const fileURI = await RNFS.copyAssetsFileIOS(uri, copyPath, 360, 360);

        setFileURI(fileURI);
      }

      return fileURI;
    },
    [fileURI],
  );

  const onConvert = useCallback(async () => {
    if (uri !== '' && Platform.OS === 'ios') {
      const result = await convertFile(uri);

      console.log('reulst2', result);

      setUri2(result);
    }
  }, [uri, convertFile]);

  const uploadImage = useCallback(() => {}, []);

  return (
    <SafeAreaView>
      <Text onPress={onGetPhotos} style={{fontSize: 30, marginTop: 50}}>
        get Photos
      </Text>

      <Text onPress={onConvert} style={{fontSize: 30, marginTop: 50}}>
        ios 파일 변환
      </Text>

      <Text>변환하고 이미지 렌더링</Text>

      {uri2 !== '' ? (
        <Image
          source={{uri: uri2}}
          style={{width: 200, height: 200, marginTop: 50}}
        />
      ) : null}

      <Text onPress={uploadImage} style={{fontSize: 30, marginTop: 50}}>
        upload image
      </Text>
    </SafeAreaView>
  );
};

export default memo(App);
