import React from 'react';
import PropTypes from 'prop-types';

import { IconWrapper, IconFigure, IconLabel } from './Icon.styled';

const Icon = ({ icon, label, color, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      <IconFigure color={color}>{icon}</IconFigure>
      <IconLabel>{label}</IconLabel>
    </IconWrapper>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  color: '#888',
  onClick: () => null
};

export default Icon;
