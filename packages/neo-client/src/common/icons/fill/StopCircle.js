import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const StopCircle = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4 12.75A1.25 1.25 0 0114.75 16h-5.5A1.25 1.25 0 018 14.75v-5.5A1.25 1.25 0 019.25 8h5.5A1.25 1.25 0 0116 9.25z" />
      <path d="M10 10h4v4h-4z" />
    </g>
  </SvgIcon>
);

export default StopCircle;
