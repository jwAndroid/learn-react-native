/**
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

const App = () => {
  // useEffect(() => {
  //   // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
  //   return appleAuth.onCredentialRevoked(async () => {
  //     console.warn(
  //       'If this function executes, User Credentials have been Revoked',
  //     );
  //   });
  // }, []);

  const onAppleButtonPress = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,

      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    if (credentialState === appleAuth.State.AUTHORIZED) {
      console.log(JSON.stringify(credentialState, null, 5));
    }
  };

  return (
    <SafeAreaView>
      <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 160,
          height: 70,
        }}
        onPress={() => onAppleButtonPress()}
      />
    </SafeAreaView>
  );
};

export default App;
