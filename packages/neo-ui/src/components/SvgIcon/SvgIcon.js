import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { SvgWrapper } from './SvgIcon.styled';

const SvgIcon = ({ children, color, viewBox, focusable, ...rest }) => {
  const theme = { textColor: color };
  return (
    <ThemeProvider theme={theme}>
      <SvgWrapper viewBox={viewBox} focusable={focusable} {...rest}>
        {children}
      </SvgWrapper>
    </ThemeProvider>
  );
};

SvgIcon.defaultProps = {
  children: null,
  color: 'inherit',
  fill: 'currentColor',
  focusable: false,
  viewBox: '0 0 24 24',
  size: '1em',
};

SvgIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fill: PropTypes.string,
  focusable: PropTypes.bool,
  size: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SvgIcon;
