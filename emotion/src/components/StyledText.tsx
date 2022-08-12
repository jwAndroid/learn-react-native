import React, { memo } from 'react';
import styled from '@emotion/native';
import { Platform } from 'react-native';

const FondlyText = styled.Text(({ theme }) => ({
  fontSize: 40,
  color: theme.color.black,
  fontFamily: Platform.select({
    android: theme.font.YoonGothicBold,
    ios: theme.font.YoonGothicBoldIos,
  }),
}));

interface IStyledText {
  text: string;
}

function StyledText({ text }: IStyledText) {
  return <FondlyText>{text}</FondlyText>;
}

export default memo(StyledText);
