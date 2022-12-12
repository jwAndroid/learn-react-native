/**
 * @format
 */

import React, {memo} from 'react';
import {View} from 'react-native';
import IMP from 'iamport-react-native';
import Loading from './src/Loading';

const App = () => {
  function callback(response: any) {
    console.log('### response ###');
    console.log(JSON.stringify(response, null, 5));
  }

  const data = {
    merchant_uid: 'mid_${DateTime.now().millisecondsSinceEpoch}', // 주문번호
    company: 'SUNMUL', // 회사명 또는 URL
    carrier: 'LGU', // 통신사
    name: '최지웅', // 이름
    phone: '01064278522',
    min_age: '15',
  };

  const data2 = {
    merchant_uid: 'mid_${DateTime.now().millisecondsSinceEpoch}', // 주문번호
    company: '', // 회사명 또는 URL
    carrier: '', // 통신사
    name: '', // 이름
    phone: '',
    min_age: '',
  };

  return (
    <View style={{flex: 1}}>
      <IMP.Certification
        userCode="imp10391932" // 가맹점 식별코드
        data={data2}
        callback={callback}
        loading={<Loading />}
      />
    </View>
  );
};

export default memo(App);
