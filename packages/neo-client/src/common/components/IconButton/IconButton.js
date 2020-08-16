import React from 'react';
import PropTypes from 'prop-types';

import { IconButtonWrapper } from './IconButton.styled';

const IconButton = ({ scheme, children, onClick }) => {
  return (
    <IconButtonWrapper theme={scheme} onClick={onClick}>
      {children}
    </IconButtonWrapper>
  );
};

IconButton.propTypes = {
  scheme: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  scheme: 'light',
  onClick: () => null,
};

export default IconButton;
