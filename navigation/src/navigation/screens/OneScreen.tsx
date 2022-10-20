import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import { RootStackNavigationProp } from '../RootStack';

function OneScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onNavigate = useCallback(() => {
    navigation.navigate('Detail', { id: 7 });
  }, [navigation]);

  return (
    <>
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: '500' }}
        >
          OneScreen
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '500',
            marginTop: 20,
          }}
          onPress={onNavigate}
        >
          Go Detail Screen
        </Text>
      </View>
    </>
  );
}

export default memo(OneScreen);
