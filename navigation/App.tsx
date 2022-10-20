/**
 * @format
 */

import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default memo(App);
