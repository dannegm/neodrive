import styled from 'styled-components';

const ExplorerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const ExplorerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 1rem;
`;

const ExplorerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 8rem);
  grid-gap: 1rem;
  margin: 1rem;
`;

export {
  // breakline
  ExplorerWrapper,
  ExplorerContainer,
  ExplorerContent
};
