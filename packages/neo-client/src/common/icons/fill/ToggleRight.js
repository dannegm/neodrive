import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const ToggleRight = (props) => (
  <SvgIcon {...props}>
    <g>
      <circle cx="15" cy="12" r="1" />
      <path d="M15 5H9a7 7 0 000 14h6a7 7 0 000-14zm0 10a3 3 0 113-3 3 3 0 01-3 3z" />
    </g>
  </SvgIcon>
);

export default ToggleRight;
