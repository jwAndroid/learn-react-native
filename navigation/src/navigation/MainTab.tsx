import React, { memo, useMemo } from 'react';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { RootStackNavigationProp } from './RootStack';
import { OneStack, ThreeStack, TwoStack } from './stacks';

type MainTabParamList = {
  OneStack: undefined;
  TwoStack: undefined;
  ThreeStack: undefined;
};

// CompositeNavigationProp 를 사용해서 navigate 를 하면 따로따로 흩어져있는 stack 을 한데 모아서
// 처리할수있다. 실제로 메인탭네비게이션프롭을 사용하여 네비게이트 해보면 rootstack 에서 정의한것과
// maintab 에서 정의한것들로 이동이 가능하다.

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
