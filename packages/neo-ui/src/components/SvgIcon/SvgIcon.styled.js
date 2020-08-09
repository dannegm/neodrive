import styled from 'styled-components';

import { textColorTheme } from '../../theme';

const SvgWrapper = styled.svg`
  display: inline-block;
  color: ${textColorTheme};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  fill: ${(props) => props.fill};
  font-size: 1.5rem;
  user-select: none;
  flex-shrink: 0;
`;

// eslint-disable-next-line import/prefer-default-export
export { SvgWrapper };
