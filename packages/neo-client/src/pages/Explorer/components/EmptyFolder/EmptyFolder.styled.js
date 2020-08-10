import styled from 'styled-components';

const EmptyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyIcon = styled.span`
  margin: 0.5rem;

  & > * {
    font-size: 5rem;
    color: #eee;
  }
`;
const EmptyDescription = styled.span`
  font-size: 1.2rem;
  color: #cecece;
  margin: 0.5rem;
`;

export { EmptyWrapper, EmptyIcon, EmptyDescription };
