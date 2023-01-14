/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@emotion/react';

import {theme} from './theme';
import CollapsibleTabBar from './src/CollapsibleTabBar';
import {Text, View} from 'react-native';
import CollapsibleTabViewTestScreen from './src/CollapsibleTabViewScreen';

function A() {
  return <Text>sd</Text>;
}

function B() {
  return <Text>sd</Text>;
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <CollapsibleTabViewTestScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
