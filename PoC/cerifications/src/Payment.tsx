import React from 'react';
import {SafeAreaView} from 'react-native';
import IMP from 'iamport-react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../App';
import Loading from './Loading';

type Props = StackScreenProps<RootStackParamList, 'Payment'>;

const Payment = ({navigation, route}: Props) => {
  const userCode = route.params?.userCode;
  const data = route.params?.data;

  /* [필수입력] 결제 후 실행될 콜백 함수 입력 */
  function callback(response: any) {
    const isSuccessed = getIsSuccessed(response);
    if (isSuccessed) {
      // 결제 성공한 경우, 리디렉션 위해 홈으로 이동한다
      const params = {
        response,
        type: 'payment',
      };
      navigation.replace('Home', params);
    } else {
      // 결제 실패한 경우, 본래 페이지로 돌아간다
      navigation.goBack();
    }
  }

  function getIsSuccessed(response: any) {
    const {imp_success, success} = response;

    if (typeof imp_success === 'string') {
      return imp_success === 'true';
    }
    if (typeof imp_success === 'boolean') {
      return imp_success === true;
    }
    if (typeof success === 'string') {
      return success === 'true';
    }
    if (typeof success === 'boolean') {
      return success === true;
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <IMP.Payment
        userCode={userCode as string}
        loading={<Loading />}
        data={{
          ...data,
          app_scheme: 'exampleforwebview',
        }}
        callback={callback}
      />
    </SafeAreaView>
  );
};

export default Payment;
