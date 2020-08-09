import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const UploadOutline = (props) => (
  <SvgIcon {...props}>
    <g>
      <rect
        height="2"
        width="16"
        rx="1"
        ry="1"
        transform="rotate(180 12 5)"
        x="4"
        y="4"
      />
      <rect
        height="2"
        width="4"
        rx="1"
        ry="1"
        transform="rotate(90 19 6)"
        x="17"
        y="5"
      />
      <rect
        height="2"
        width="4"
        rx="1"
        ry="1"
        transform="rotate(90 5 6)"
        x="3"
        y="5"
      />
      <path d="M8 14a1 1 0 01-.8-.4 1 1 0 01.2-1.4l4-3a1 1 0 011.18 0l4 2.82a1 1 0 01.24 1.39 1 1 0 01-1.4.24L12 11.24 8.6 13.8a1 1 0 01-.6.2z" />
      <path d="M12 21a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z" />
    </g>
  </SvgIcon>
);

export default UploadOutline;
