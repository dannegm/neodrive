import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const Clock = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4 11h-4a1 1 0 01-1-1V8a1 1 0 012 0v3h3a1 1 0 010 2z" />
    </g>
  </SvgIcon>
);

export default Clock;
