import React, { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { OneScreen, OneTestScreen } from '../screens';

export type OneStackParamList = {
  One: undefined;
  OneTest: undefined;
};

export type OneStackNavigationProp =
  NativeStackNavigationProp<OneStackParamList>;

const { Navigator, Screen } =
  createNativeStackNavigator<OneStackParamList>();

function OneStack() {
  const options = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );

  return (
    <Navigator initialRouteName="One">
      <Screen name="One" component={OneScreen} options={options} />

      <Screen
        name="OneTest"
        component={OneTestScreen}
        options={options}
      />
    </Navigator>
  );
}

export default memo(OneStack);
