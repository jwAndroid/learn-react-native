/**
 */

import React, {memo, useCallback, useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, SafeAreaView, Text} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const App = () => {
  const [source, setSource] = useState('');

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

  const onPress = useCallback(async () => {
    const result = await CameraRoll.getPhotos({first: 1, assetType: 'Photos'});

    setSource(result.edges[0].node.image.uri);

    console.log(JSON.stringify(result.edges[0].node.image.uri, null, 5));
  }, []);

  return (
    <SafeAreaView>
      <Text onPress={onPress} style={{fontSize: 30}}>
        get Photos
      </Text>
    </SafeAreaView>
  );
};

export default memo(App);
