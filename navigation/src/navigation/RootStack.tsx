import React, { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import MainTab, { MainTabNavigationScreenParams } from './MainTab';
import { DetailScreen } from './screens';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: { id: number };
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

      <Screen
        name="Detail"
        component={DetailScreen}
        options={options}
      />
    </Navigator>
  );
}

export default memo(RootStack);
