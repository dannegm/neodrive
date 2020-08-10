import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Breadcrumb, IconButton } from '@neo/ui/lib/components';
import {
  HomeOutlineIcon,
  RefreshOutlineIcon,
  FolderIcon,
  FileIcon
} from '@neo/ui/lib/icons';

import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Icon from './components/Icon';
import EmptyFolder from './components/EmptyFolder';
import DropZone from './components/DropZone';
import ScrollArea from './components/ScrollArea';

import {
  ExplorerWrapper,
  ExplorerContainer,
  ExplorerContent
} from './Explorer.styled';

import useDirectory, { processPath } from '@/state/hooks/useDirectory';

const Files = ({ content, handleFolder, currentPath }) => {
  return (
    <>
      {content.folders.map((folder) => {
        const context = currentPath !== '/' ? `${currentPath}/` : '';
        return (
          <Icon
            key={`folder:${context}${folder}`}
            color="#FFDB86"
            icon={<FolderIcon />}
            label={folder}
            onClick={() => handleFolder(`${context}${folder}`)}
          />
        );
      })}

      {content.files.map((file) => (
        <Icon
          key={`file:${currentPath}/${file}`}
          color="#bbb"
          icon={<FileIcon />}
          label={file}
        />
      ))}
    </>
  );
};

const Explorer = () => {
  const history = useHistory();
  const { folder } = useParams();

  const { currentPath, setPath, content, listDirectory } = useDirectory(
    folder ? folder : '/'
  );
  const splittedPath = processPath(currentPath);

  useEffect(() => {
    setPath(folder ? folder : '/');
  }, [folder]);

  const handleFolder = (selectedFolder) => {
    history.push(selectedFolder !== '/' ? `/${selectedFolder}` : '/');
  };

  return (
    <ExplorerWrapper>
      <Sidebar />
      <ExplorerContainer>
        <Toolbar
          slotLeft={
            <Breadcrumb>
              <Breadcrumb.Item
                icon={<HomeOutlineIcon />}
                onClick={() => handleFolder('/')}
              />
              {splittedPath.map((folder, index) => (
                <Breadcrumb.Item
                  key={`breadcrumb:${folder.path}`}
                  label={folder.name}
                  current={index + 1 === splittedPath.length}
                  onClick={() => handleFolder(folder.path)}
                />
              ))}
            </Breadcrumb>
          }
          slotRight={
            <IconButton onClick={() => listDirectory()}>
              <RefreshOutlineIcon />
            </IconButton>
          }
        />

        <DropZone onFinished={() => listDirectory()}>
          {!content.folders.length && !content.files.length ? (
            <EmptyFolder />
          ) : (
            <ScrollArea>
              <ExplorerContent>
                <Files
                  content={content}
                  handleFolder={handleFolder}
                  currentPath={currentPath}
                />
              </ExplorerContent>
            </ScrollArea>
          )}
        </DropZone>
      </ExplorerContainer>
    </ExplorerWrapper>
  );
};

export default Explorer;
