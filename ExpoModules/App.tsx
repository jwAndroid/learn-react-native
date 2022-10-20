/**
 * @format
 */

import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  const onPress = useCallback(() => {
    Linking.openURL('https://docs.expo.dev');
  }, []);

  return (
    <View style={styles.block}>
      <Text onPress={onPress}>App</Text>
    </View>
  );
};

export default memo(App);
