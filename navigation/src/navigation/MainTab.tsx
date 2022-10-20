import React, { memo } from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { RootStackNavigationProp } from './RootStack';
import { OneScreen, ThreeScreen, TwoScreen } from './screens';

type MainTabParamList = {
  One: undefined;
  Two: undefined;
  Three: undefined;
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
  return (
    <Navigator initialRouteName="One">
      <Screen name="One" component={OneScreen} />

      <Screen name="Two" component={TwoScreen} />
      <Screen name="Three" component={ThreeScreen} />
    </Navigator>
  );
}

export default memo(MainTab);
