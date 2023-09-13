import { View, Text } from 'react-native';
import React, { memo, useEffect } from 'react';

const Component = () => {
  useEffect(() => {}, []);

  return (
    <View>
      <Text>Component</Text>
    </View>
  );
};

export default memo(Component);
