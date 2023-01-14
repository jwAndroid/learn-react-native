/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@emotion/react';

import {theme} from './theme';
import Example from './src/Example';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Example />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
