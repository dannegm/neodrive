import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const QuestionMarkCircleOutline = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
      <path d="M12 6a3.5 3.5 0 00-3.5 3.5 1 1 0 002 0A1.5 1.5 0 1112 11a1 1 0 00-1 1v2a1 1 0 002 0v-1.16A3.49 3.49 0 0012 6z" />
      <circle cx="12" cy="17" r="1" />
    </g>
  </SvgIcon>
);

export default QuestionMarkCircleOutline;
