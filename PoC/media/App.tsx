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

  const phPathToFilePath = async (uri: string) => {
    let fileURI = encodeURI(uri);

    if (uri.startsWith('ph://')) {
      const copyPath = `${
        RNFS.DocumentDirectoryPath
      }/${new Date().toISOString()}.jpg`.replace(/:/g, '-');

      // ph경로의 이미지를 file로 옮기는 작업
      fileURI = await RNFS.copyAssetsFileIOS(uri, copyPath, 360, 360);
    }

    return fileURI;
  };

  const onConvert = useCallback(async () => {
    if (uri !== '' && Platform.OS === 'ios') {
      const fileName = uri.replace('ph://', '');

      const result = await phPathToFilePath(uri);

      console.log(fileName);
      console.log(result);
    }
  }, [uri]);

  return (
    <SafeAreaView>
      <Text onPress={onGetPhotos} style={{fontSize: 30}}>
        get Photos
      </Text>

      <Text onPress={onConvert} style={{fontSize: 30}}>
        ios 파일 변환
      </Text>

      <Image
        source={{uri: 'ph://DDBEEB48-DED7-48F0-9283-394D9587EF05/L0/001'}}
        style={{width: 200, height: 200}}
      />
    </SafeAreaView>
  );
};

export default memo(App);
