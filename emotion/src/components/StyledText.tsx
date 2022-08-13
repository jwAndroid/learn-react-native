import React, { memo } from 'react';
import styled from '@emotion/native';

const FondlyText = styled.Text(({ theme }) => ({
  fontSize: 50,
  color: theme.color.black,
}));

interface IStyledText {
  text: string;
}

function StyledText({ text }: IStyledText) {
  return <FondlyText>{text}</FondlyText>;
}

export default memo(StyledText);
