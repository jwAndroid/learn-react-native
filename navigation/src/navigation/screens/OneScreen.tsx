import { View, Text } from 'react-native';
import React, { memo } from 'react';

function OneScreen() {
  return (
    <View>
      <Text>OneScreen</Text>
    </View>
  );
}

export default memo(OneScreen);
