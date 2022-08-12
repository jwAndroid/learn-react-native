import React, { memo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { Platform } from 'react-native';

const FondlyText = styled.Text(({ theme }) => ({
  fontSize: 40,
  color: theme.color.black,
  fontFamily: Platform.select({
    android: theme.font.YoonGothicBold,
    ios: 'YDIYGO330',
  }),
}));

interface IStyledText {
  text: string;
}

function StyledText({ text }: IStyledText) {
  const theme = useTheme();
  console.log(theme.font.YoonGothicBoldIos);
  return <FondlyText>{text}</FondlyText>;
}

export default memo(StyledText);
