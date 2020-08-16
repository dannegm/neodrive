import styled from 'styled-components';
import Scheme from '@/theme/scheme';

const IconButtonWrapper = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  background: none;
  color: ${({ theme }) => Scheme[theme].foreground};
  border: 0;
  outline: 0;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: rgb(0 0 0 / 15%);
  }

  &:active > * {
    transform: scale(0.9);
  }
`;

export { IconButtonWrapper };
