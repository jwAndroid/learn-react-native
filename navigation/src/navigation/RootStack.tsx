import React, { memo } from 'react';
import {
  createNativeStackNavigator,
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
  return (
    <Navigator>
      <Screen
        component={MainTab}
        name="MainTab"
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

export default memo(RootStack);
