import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const CloseSquare = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-3.29 10.29a1 1 0 010 1.42 1 1 0 01-1.42 0L12 13.41l-1.29 1.3a1 1 0 01-1.42 0 1 1 0 010-1.42l1.3-1.29-1.3-1.29a1 1 0 011.42-1.42l1.29 1.3 1.29-1.3a1 1 0 011.42 1.42L13.41 12z" />
    </g>
  </SvgIcon>
);

export default CloseSquare;
