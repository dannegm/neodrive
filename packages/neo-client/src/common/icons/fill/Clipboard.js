import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const Clipboard = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M18 4v3a2 2 0 01-2 2H8a2 2 0 01-2-2V4a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3z" />
      <rect height="6" width="10" rx="1" ry="1" x="7" y="2" />
    </g>
  </SvgIcon>
);

export default Clipboard;
