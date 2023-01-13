/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import CollapsibleTabViewTestScreen from './src/CollapsibleTabViewTestScreen';

const App = () => {
  return (
    <NavigationContainer>
      <CollapsibleTabViewTestScreen />
    </NavigationContainer>
  );
};

export default App;
