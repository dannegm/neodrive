import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const accentColor = '#7D3F88';

const DropZoneWrapper = styled.div`
  flex: 1;
  margin: 1rem;
  border: 1px solid transparent;
  border-radius: 0.1rem;
  transition: all 0.2s;
  overflow: hidden;
  ${({ dragOver }) =>
    dragOver &&
    css`
      border-color: ${accentColor};
      background-color: ${rgba(accentColor, 0.1)};
    `}
`;

const DropZoneMessage = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  bottom: 2rem;
  left: 50%;
  padding: 0.5rem 2rem;
  background-color: ${accentColor};
  border-radius: 0.3rem;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 30%), 0 0.25rem 3rem 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
  transform: translateX(-50%);
`;

const DropZoneIcon = styled.span`
  margin: 0.5rem;

  & > * {
    font-size: 2rem;
    color: #fff;
  }
`;
const DropZoneDescription = styled.span`
  font-size: 1rem;
  color: #fff;
  margin: 0.5rem;
`;

export { DropZoneWrapper, DropZoneMessage, DropZoneIcon, DropZoneDescription };
