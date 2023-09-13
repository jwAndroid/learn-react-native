import { View, Text } from "react-native";
import React, { memo } from "react";

const Component = () => {
   return (
      <View>
         <Text>Component</Text>
      </View>
   );
};

export default memo(Component);
