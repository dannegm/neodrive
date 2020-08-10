import React from 'react';
import PropTypes from 'prop-types';

import ReactScrollbar from 'react-scrollbar';

const ScrollArea = ({ children, height, ...props }) => {
  const internalProps = {
    speed: 0.8,
    style: {
      height: '100%'
    },
    verticalContainerStyle: {
      width: 8,
      opacity: 1
    },
    verticalScrollbarStyle: {
      backgroundColor: '#9B9B9C',
      opacity: 1
    },
    stopScrollPropagation: true
  };

  const composedProps = {
    ...internalProps,
    ...props
  };
  return <ReactScrollbar {...composedProps}>{children}</ReactScrollbar>;
};

ScrollArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScrollArea;
