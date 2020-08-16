import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

const ItemWrapper = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  outline: 0;
  border-bottom: 1px solid transparent;
  margin-bottom: -1px;
  transition: all 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }

  &:active {
    transform: scale(0.9);
  }

  ${({ current }) =>
    current &&
    css`
      color: black;
      font-weight: 500;
    `}
`;

const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.3rem;

  & > * {
    font-size: 1rem;
  }
`;

const ItemText = styled.span`
  display: block;
  font-size: 1rem;
  ${ellipsis('6rem')}
`;

export { ItemWrapper, ItemIcon, ItemText };
