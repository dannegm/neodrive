import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
`;

const BreadcrumbSeparator = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 0 0.25rem;
`;

export { BreadcrumbWrapper, BreadcrumbSeparator };
