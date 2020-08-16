import styled from 'styled-components';
import Scheme from '@/theme/scheme';

const SidebarWrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => Scheme[theme].background};
  color: ${({ theme }) => Scheme[theme].foreground};
  box-shadow: 0 0 0.5rem 0 rgb(0 0 0 / 20%);
`;

export { SidebarWrapper };
