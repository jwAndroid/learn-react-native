import React, { memo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

const ImageBox = styled.Image({
  width: 150,
  height: 150,
});

function StyledImage() {
  const theme = useTheme();

  return <ImageBox source={theme.icon.favoritesfill} />;
}

export default memo(StyledImage);
