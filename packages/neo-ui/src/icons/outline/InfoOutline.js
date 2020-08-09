import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const InfoOutline = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
      <path d="M12 10a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1z" />
      <circle cx="12" cy="8" r="1" />
    </g>
  </SvgIcon>
);

export default InfoOutline;
