import React from 'react';
import SvgIcon from '../../components/SvgIcon';

const DownloadOutline = (props) => (
  <SvgIcon {...props}>
    <g>
      <rect height="2" width="16" rx="1" ry="1" x="4" y="18" />
      <rect
        height="2"
        width="4"
        rx="1"
        ry="1"
        transform="rotate(-90 5 18)"
        x="3"
        y="17"
      />
      <rect
        height="2"
        width="4"
        rx="1"
        ry="1"
        transform="rotate(-90 19 18)"
        x="17"
        y="17"
      />
      <path d="M12 15a1 1 0 01-.58-.18l-4-2.82a1 1 0 01-.24-1.39 1 1 0 011.4-.24L12 12.76l3.4-2.56a1 1 0 011.2 1.6l-4 3a1 1 0 01-.6.2z" />
      <path d="M12 13a1 1 0 01-1-1V4a1 1 0 012 0v8a1 1 0 01-1 1z" />
    </g>
  </SvgIcon>
);

export default DownloadOutline;
