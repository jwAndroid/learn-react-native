import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';

import {RootStackParamList} from '../App';
import Loading from './Loading';

type Props = StackScreenProps<RootStackParamList, 'Certification'>;

const Certification = ({navigation, route}: Props) => {
  const userCode = route.params?.userCode;
  const data = route.params?.data;

  /* [필수입력] 본인인증 후 실행될 콜백 함수 입력 */
  function callback(response: any) {
    const isSuccessed = getIsSuccessed(response);
    if (isSuccessed) {
      // 본인인증 성공한 경우, 리디렉션 위해 홈으로 이동한다
      const params = {
        response,
        type: 'certification',
      };
      navigation.replace('Home', params);
    } else {
      // 본인인증 실패한 경우, 본래 페이지로 돌아간다
      navigation.goBack();
    }
  }

  function getIsSuccessed(response: any) {
    const {success} = response;

    if (typeof success === 'string') {
      return success === 'true';
    }
    if (typeof success === 'boolean') {
      return success === true;
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <IMP.Certification
        userCode={userCode as string}
        loading={<Loading />}
        data={data}
        callback={callback}
      />
    </SafeAreaView>
  );
};

export default Certification;
