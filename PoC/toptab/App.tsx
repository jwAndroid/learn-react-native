/**
 * @format
 */

import React, {memo} from 'react';
import {SafeAreaView, View} from 'react-native';
import MainScreen from './src/MainScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainScreen />
    </SafeAreaView>
  );
};

export default memo(App);
