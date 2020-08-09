import React from 'react';
import PropTypes from 'prop-types';

import { ToolbarWrapper } from './Toolbar.styled';

const Toolbar = ({ scheme, children }) => {
  return <ToolbarWrapper theme={scheme}>{children}</ToolbarWrapper>;
};

Toolbar.propTypes = {
  scheme: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node.isRequired,
};

Toolbar.defaultProps = {
  scheme: 'light',
};

export default Toolbar;
