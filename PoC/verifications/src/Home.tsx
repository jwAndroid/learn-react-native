import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import WebView from 'react-native-webview';
import queryString from 'query-string';

import {RootStackParamList} from '../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation, route}: Props) => {
  const domain = 'http://10.160.43.111:3000';
  const [uri, setUri] = useState(domain);

  useEffect(() => {
    const type = route.params?.type;
    const response = route.params?.response;
    if (response) {
      const query = queryString.stringify(response);
      if (type === 'payment') {
        setUri(`${domain}/payment/result?${query}`);
      } else {
        setUri(`${domain}/certification/result?${query}`);
      }
    }
  }, [route]);

  return (
    <WebView
      style={{flex: 1}}
      source={{uri}}
      onMessage={e => {
        try {
          const {userCode, data, type} = JSON.parse(e.nativeEvent.data);
          const params = {userCode, data};
          navigation.push(
            type === 'payment' ? 'Payment' : 'Certification',
            params,
          );
        } catch (e) {}
      }}
      injectedJavascript={`(function() {
        window.postMessage = function(data) {
          window.ReactNativeWebView.postMessage(data);
        };
      })()`}
    />
  );
};

export default Home;
