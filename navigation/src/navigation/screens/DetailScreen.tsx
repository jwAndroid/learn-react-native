import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {
  RootStackNavigationProp,
  RootStackParamList,
} from '../RootStack';
import Header from '../../components/Header';
import { MainTabNavigationProp } from '../MainTab';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();

  const navigation = useNavigation<RootStackNavigationProp>();

  // 이렇게 다른 스크린 또는 스택에서 초기 탭으로 이동할수 있다.
  const tab = useNavigation<MainTabNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Detail2');
  }, [navigation]);

  const onPress2 = useCallback(() => {
    tab.navigate('ThreeStack');
  }, [tab]);

  return (
    <>
      <Header />

      <View>
        <Text>DetailScreen</Text>

        <Text onPress={onPress}>go detail2 screen</Text>

        <Text onPress={onPress2}>go three tab screen</Text>

        <Text>{params && params.id}</Text>
      </View>
    </>
  );
}

export default memo(DetailScreen);
