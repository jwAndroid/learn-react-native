import React, { memo } from 'react';
import styled from '@emotion/native';

interface IColorButton {
  color?: string;
}

const ColorButton = styled.View<IColorButton>(({ color }) => ({
  width: 150,
  height: 150,
  borderRadius: 15,
  backgroundColor: color,
}));

interface IStyledBox {
  color?: string;
}

function StyledBox({ color }: IStyledBox) {
  return <ColorButton color={color} />;
}

StyledBox.defaultProps = {
  color: '#000',
};

export default memo(StyledBox);
