import styled from '@emotion/native';
import React, { memo, ReactNode } from 'react';

const SafeArea = styled.SafeAreaView({
  flex: 1,
});

interface ISafeAreaContainer {
  children: ReactNode;
}

function SafeAreaContainer({ children }: ISafeAreaContainer) {
  return <SafeArea>{children}</SafeArea>;
}

export default memo(SafeAreaContainer);
