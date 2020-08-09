import React from 'react';
import PropTypes from 'prop-types';

import { SidebarWrapper } from './Sidebar.styled';

const Sidebar = ({ scheme, children }) => {
  return <SidebarWrapper theme={scheme}>{children}</SidebarWrapper>;
};

Sidebar.propTypes = {
  scheme: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node.isRequired,
};

Sidebar.defaultProps = {
  scheme: 'light',
};

export default Sidebar;
