import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const MessageSquare = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M19 3H5a3 3 0 00-3 3v15a1 1 0 00.51.87A1 1 0 003 22a1 1 0 00.51-.14L8 19.14a1 1 0 01.55-.14H19a3 3 0 003-3V6a3 3 0 00-3-3zM8 12a1 1 0 111-1 1 1 0 01-1 1zm4 0a1 1 0 111-1 1 1 0 01-1 1zm4 0a1 1 0 111-1 1 1 0 01-1 1z" />
    </g>
  </SvgIcon>
);

export default MessageSquare;
