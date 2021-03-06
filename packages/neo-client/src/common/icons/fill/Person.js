import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const Person = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 11a4 4 0 10-4-4 4 4 0 004 4zM18 21a1 1 0 001-1 7 7 0 00-14 0 1 1 0 001 1z" />
    </g>
  </SvgIcon>
);

export default Person;
