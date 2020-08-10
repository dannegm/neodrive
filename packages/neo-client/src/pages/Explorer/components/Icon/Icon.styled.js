import styled from 'styled-components';
import { ellipsis, rgba } from 'polished';

const IconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 6rem;
  width: 8rem;
  background: none;
  border: 0;
  border-radius: 0.25rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${rgba('#5f75b6', 0.1)};
  }

  &:active {
    transform: scale(0.9);
  }
`;

const IconFigure = styled.span`
  display: block;

  & > * {
    color: ${({ color }) => color};
    font-size: 4rem;
  }
`;

const IconLabel = styled.span`
  display: block;
  font-size: 0.8rem;
  ${ellipsis('8rem')}
`;

export { IconWrapper, IconFigure, IconLabel };
