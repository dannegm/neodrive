import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const PlusCircle = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 11h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2h2a1 1 0 010 2z" />
    </g>
  </SvgIcon>
);

export default PlusCircle;
