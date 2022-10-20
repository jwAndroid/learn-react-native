import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

function OneScreen() {
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
      </View>
    </>
  );
}

export default memo(OneScreen);
