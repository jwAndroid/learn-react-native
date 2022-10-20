import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginTop: insets.top,
      }}
    >
      <Text>Header</Text>
    </View>
  );
}

export default memo(Header);
