/**
 * @format
 */

import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <RootStack />
    </NavigationContainer>
  );
}

export default memo(App);
