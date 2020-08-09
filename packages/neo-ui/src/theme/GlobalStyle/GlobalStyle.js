/* stylelint-disable value-keyword-case */
import React from 'react';
import PropTypes from 'prop-types';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

import textColorTheme from '../textColor';
import fontFamilyTheme from '../fontFamily';
import fontSizeTheme from '../fontSize';
import fontWeightTheme from '../fontWeight';
import lineHeightTheme from '../lineHeight';
import colors from '../colors';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: ${textColorTheme};
    font-family: ${fontFamilyTheme};
    font-size: ${fontSizeTheme};
    font-weight: ${fontWeightTheme};
    line-height: ${lineHeightTheme};
  }

  a {
    cursor: pointer;
    color: ${colors.base};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const GlobalStyleWrapper = ({
  textColor,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
}) => (
  <ThemeProvider
    theme={{
      textColor,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
    }}
  >
    <GlobalStyle />
  </ThemeProvider>
);

GlobalStyleWrapper.defaultProps = {
  textColor: 'black',
  fontFamily: 'lato',
  fontSize: 'textMedium',
  fontWeight: 'regular',
  lineHeight: 'textMedium',
};

GlobalStyleWrapper.propTypes = {
  textColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};

export default GlobalStyleWrapper;
