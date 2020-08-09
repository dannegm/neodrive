import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const MinusSquare = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-3 10H9a1 1 0 010-2h6a1 1 0 010 2z" />
    </g>
  </SvgIcon>
);

export default MinusSquare;
