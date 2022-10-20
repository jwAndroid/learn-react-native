import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../RootStack';
import Header from '../../components/Header';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();

  return (
    <>
      <Header />

      <View>
        <Text>DetailScreen</Text>

        <Text>{params && params.id}</Text>
      </View>
    </>
  );
}

export default memo(DetailScreen);
