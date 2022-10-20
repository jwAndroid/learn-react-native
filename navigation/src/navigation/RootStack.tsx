import React, { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import MainTab, { MainTabNavigationScreenParams } from './MainTab';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } =
  createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const options = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );

  return (
    <Navigator initialRouteName="MainTab">
      <Screen name="MainTab" component={MainTab} options={options} />
    </Navigator>
  );
}

export default memo(RootStack);