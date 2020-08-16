import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const MinusCircle = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 11H9a1 1 0 010-2h6a1 1 0 010 2z" />
    </g>
  </SvgIcon>
);

export default MinusCircle;
