import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const QuestionMark = (props) => (
  <SvgIcon {...props}>
    <g>
      <path d="M17 9A5 5 0 007 9a1 1 0 002 0 3 3 0 113 3 1 1 0 00-1 1v2a1 1 0 002 0v-1.1A5 5 0 0017 9z" />
      <circle cx="12" cy="19" r="1" />
    </g>
  </SvgIcon>
);

export default QuestionMark;
