import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

function TwoScreen() {
  return (
    <>
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'skyblue',
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: '500' }}
        >
          TwoScreen
        </Text>
      </View>
    </>
  );
}

export default memo(TwoScreen);
