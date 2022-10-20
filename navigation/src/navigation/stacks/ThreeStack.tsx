import React, { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ThreeScreen } from '../screens';

export type RootStackParamList = {
  Three: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } =
  createNativeStackNavigator<RootStackParamList>();

function ThreeStack() {
  const options = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );

  return (
    <Navigator initialRouteName="Three">
      <Screen
        name="Three"
        component={ThreeScreen}
        options={options}
      />
    </Navigator>
  );
}

export default memo(ThreeStack);
