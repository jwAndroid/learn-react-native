/**
 * @format
 */

import React, { memo } from 'react';
import { View } from 'react-native';

import { StyledText } from './src';

const App = () => {
   return (
      <View className='flex-1 justify-center items-center'>
         <StyledText />
      </View>
   );
};

export default memo(App);
