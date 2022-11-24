/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {memo} from 'react';

import MainScreen from './src/MainScreen';
import NonModule from './src/screens/NonModule';

const App = () => {
  return (
    <NonModule />
    // <NavigationContainer>
    //   <MainScreen />
    // </NavigationContainer>
  );
};

export default memo(App);
