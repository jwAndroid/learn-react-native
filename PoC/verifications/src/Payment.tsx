import React from 'react';
import IMP from 'iamport-react-native';

import {key} from '../key';

const Payment = () => {
  function callback(response: any) {
    console.log(response);
  }

  const data = {
    pg: 'danal_tpay',
    pay_method: 'card',
    name: 'shakalaka-dev',
    merchant_uid: `mid_${new Date().getTime()}`,
    amount: '39000',
    buyer_name: '홍길동',
    buyer_tel: '01012345678',
    buyer_email: 'example@naver.com',
    buyer_addr: '서울시 강남구 신사동 661-16',
    buyer_postcode: '06018',
    app_scheme: 'example',
    escrow: false,
  };

  return (
    <IMP.Payment
      userCode={key} // 가맹점 테스트 식별코드
      data={data} // 결제 데이터
      callback={callback} // 결제 종료 후 콜백
    />
  );
};

export default Payment;
