/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import { name as appName } from './app.json';
import App from './App';
import { AppTheme } from './src/theme';

function Component() {
  return (
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Component);
