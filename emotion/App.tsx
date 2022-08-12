/**
 * @format
 */

import React, { memo, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';

import { AppTheme } from './src/utils/theme';
import { Home, SafeAreaContainer } from './src/screens';

function App() {
  const theme = useMemo(() => AppTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaContainer>
        <Home />
      </SafeAreaContainer>
    </ThemeProvider>
  );
}

export default memo(App);
