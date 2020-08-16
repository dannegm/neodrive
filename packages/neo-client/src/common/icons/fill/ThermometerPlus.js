import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const ThermometerPlus = (props) => (
  <SvgIcon {...props}>
    <g>
      <rect height="2" width="6" rx="1" ry="1" x="2" y="5" />
      <rect
        height="2"
        width="6"
        rx="1"
        ry="1"
        transform="rotate(-90 5 6)"
        x="2"
        y="5"
      />
      <path d="M14 22a5 5 0 01-3-9V5a3 3 0 013-3 3 3 0 013 3v8a5 5 0 01-3 9zm1-12.46V5a.93.93 0 00-.29-.69A1 1 0 0014 4a1 1 0 00-1 1v4.54z" />
    </g>
  </SvgIcon>
);

export default ThermometerPlus;
