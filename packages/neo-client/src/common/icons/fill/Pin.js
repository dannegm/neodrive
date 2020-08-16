import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const Pin = (props) => (
  <SvgIcon {...props}>
    <g>
      <circle cx="12" cy="9.5" r="1.5" />
      <path d="M12 2a8 8 0 00-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 001.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0012 2zm0 11a3.5 3.5 0 113.5-3.5A3.5 3.5 0 0112 13z" />
    </g>
  </SvgIcon>
);

export default Pin;
