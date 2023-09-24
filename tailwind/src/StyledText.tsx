import React, { memo } from 'react';
import { Text, View } from 'react-native';

const StyledText = () => {
   return (
      <View>
         <Text>StyledText</Text>
      </View>
   );
};

export default memo(StyledText);
