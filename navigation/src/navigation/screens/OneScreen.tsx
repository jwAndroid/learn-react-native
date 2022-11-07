import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import { RootStackNavigationProp } from '../RootStack';
import { OneStackNavigationProp } from '../stacks/OneStack';

function OneScreen() {
  const oneStack = useNavigation<OneStackNavigationProp>();
  const rootStack = useNavigation<RootStackNavigationProp>();

  const onNavigate = useCallback(() => {
    rootStack.navigate('Detail', { id: 7 });
  }, [rootStack]);

  const goOneTest = useCallback(() => {
    oneStack.navigate('OneTest');
  }, [oneStack]);

  return (
    <>
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: '500' }}
        >
          OneScreen
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '500',
            marginTop: 20,
          }}
          onPress={onNavigate}
        >
          Go Detail Screen
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '500',
            marginTop: 20,
          }}
          onPress={goOneTest}
        >
          Go Test Screen
        </Text>
      </View>
    </>
  );
}

export default memo(OneScreen);
