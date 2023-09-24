/**
 * @format
 */

import React, { memo } from 'react';
import { Text, View } from 'react-native';

const App = () => {
   return (
      <View className='flex-1 justify-center items-center bg-gray-800'>
         <Text className='font-bold italic text-cyan-300 text-xl text'>Hello Tailwind</Text>
      </View>
   );
};

export default memo(App);
