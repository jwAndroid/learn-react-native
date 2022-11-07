import React, { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import MainTab, { MainTabNavigationScreenParams } from './MainTab';
import { DetailScreen, DetailScreen2 } from './screens';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: { id: number };
  Detail2: undefined;
};

// 어떤 스택을 쌓을것인지 정의하고, navigate 하기위한 타입정의를 해준다.
// 따라서 RootStackNavigationProp 타입을 사용하여 navigate 하여 화면전환을 했을때
// 위에 정의된 RootStackParamList 의 컴포넌트들만 이동할 수 있다.
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

// 네비게이션 컴포넌트를 불러오기위한 네비게이터와 스크린이다.
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

      <Screen
        name="Detail2"
        component={DetailScreen2}
        options={options}
      />
    </Navigator>
  );
}

export default memo(RootStack);
