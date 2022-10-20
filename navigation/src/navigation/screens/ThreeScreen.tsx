import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

function ThreeScreen() {
  return (
    <>
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: '500' }}
        >
          ThreeScreen
        </Text>
      </View>
    </>
  );
}

export default memo(ThreeScreen);
