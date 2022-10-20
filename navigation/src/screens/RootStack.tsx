import { View, Text } from 'react-native';
import React, { memo } from 'react';

function RootStack() {
  return (
    <View>
      <Text>RootStack</Text>
    </View>
  );
}

export default memo(RootStack);
