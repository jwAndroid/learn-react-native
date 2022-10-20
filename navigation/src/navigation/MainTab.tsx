import React, { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { RootStackNavigationProp } from './RootStack';
import { OneStack, ThreeStack, TwoStack } from './stacks';

type MainTabParamList = {
  OneStack: undefined;
  TwoStack: undefined;
  ThreeStack: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

const { Navigator, Screen } =
  createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  const options = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );
  return (
    <Navigator initialRouteName="OneStack">
      <Screen
        name="OneStack"
        component={OneStack}
        options={options}
      />

      <Screen
        name="TwoStack"
        component={TwoStack}
        options={options}
      />
      <Screen
        name="ThreeStack"
        component={ThreeStack}
        options={options}
      />
    </Navigator>
  );
}

export default memo(MainTab);
