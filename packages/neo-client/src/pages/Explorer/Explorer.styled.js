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

const ExplorerScroller = styled.div`
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ExplorerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 8rem);
  grid-gap: 2rem;
`;

export {
  // breakline
  ExplorerWrapper,
  ExplorerContainer,
  ExplorerScroller,
  ExplorerContent
};
