import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import {
  // breakline
  IconButton,
  Spacer,
  Toolbar,
} from '@/common/components';

import {
  ArrowIosBackOutlineIcon,
  ArrowIosForwardOutlineIcon,
  CornerLeftUpOutlineIcon,
  FolderAddOutlineIcon,
  MoreVerticalOutlineIcon,
} from '@/common/icons';

const ExplorerToolbar = ({ slotLeft, slotCenter, slotRight }) => {
  const history = useHistory();
  const { folder } = useParams();

  const currentPath = folder ? folder.split('/') : [];
  const previousPath = currentPath.splice(0, currentPath.length - 1).join('/');

  const handleUpLevel = () => {
    const upLevel = folder !== '/' ? `/${previousPath}` : '/';
    history.push(upLevel);
  };

  return (
    <Toolbar>
      <IconButton onClick={() => history.goBack()}>
        <ArrowIosBackOutlineIcon />
      </IconButton>
      <IconButton onClick={() => history.goForward()}>
        <ArrowIosForwardOutlineIcon />
      </IconButton>
      <IconButton onClick={handleUpLevel}>
        <CornerLeftUpOutlineIcon />
      </IconButton>

      {slotLeft}
      <Spacer />
      {slotCenter}
      <Spacer />
      {slotRight}

      <IconButton>
        <FolderAddOutlineIcon />
      </IconButton>
      <IconButton>
        <MoreVerticalOutlineIcon />
      </IconButton>
    </Toolbar>
  );
};

ExplorerToolbar.propTypes = {
  slotLeft: PropTypes.node,
  slotCenter: PropTypes.node,
  slotRight: PropTypes.node,
};

ExplorerToolbar.defaultProps = {
  slotLeft: null,
  slotCenter: null,
  slotRight: null,
};

export default ExplorerToolbar;
