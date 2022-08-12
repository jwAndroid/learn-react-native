/**
 * @format
 */

import React, { memo } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}
    >
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}

export default memo(App);
