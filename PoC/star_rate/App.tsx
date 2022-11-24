/**
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@emotion/react';

import {AppTheme} from './src/theme';
import Screen from './src/Screen';

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <SafeAreaView>
        <Screen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
