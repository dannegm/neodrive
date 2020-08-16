import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const List = (props) => (
  <SvgIcon {...props}>
    <g>
      <circle cx="4" cy="7" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="17" r="1" />
      <rect height="2" width="14" rx=".94" ry=".94" x="7" y="11" />
      <rect height="2" width="14" rx=".94" ry=".94" x="7" y="16" />
      <rect height="2" width="14" rx=".94" ry=".94" x="7" y="6" />
    </g>
  </SvgIcon>
);

export default List;
