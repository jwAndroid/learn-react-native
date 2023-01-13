/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import CollapsibleTabViewScreen from './src/CollapsibleTabViewScreen';

const App = () => {
  return (
    <NavigationContainer>
      <CollapsibleTabViewScreen />
    </NavigationContainer>
  );
};

export default App;
