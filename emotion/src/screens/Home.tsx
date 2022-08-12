import React, { memo } from 'react';
import { useTheme } from '@emotion/react';

import styled from '@emotion/native';
import { StyledImage, StyledText } from '../components';
import StyledBox from '../components/StyledBox';

const Contaier = styled.View({
  flex: 1,
});

interface IContentsContainer {
  backgroundColor: string;
}

const ContentsContainer = styled.View<IContentsContainer>(
  ({ backgroundColor }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  }),
);

function Home() {
  const theme = useTheme();

  return (
    <Contaier>
      <ContentsContainer backgroundColor={theme.color.skyblue.one}>
        <StyledImage />
      </ContentsContainer>

      <ContentsContainer backgroundColor={theme.color.skyblue.two}>
        <StyledBox color="orange" />
      </ContentsContainer>

      <ContentsContainer backgroundColor={theme.color.skyblue.three}>
        <StyledText text="hello world" />
      </ContentsContainer>
    </Contaier>
  );
}

export default memo(Home);
