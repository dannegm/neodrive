import React from 'react';

import {
  // breakline
  IconButton,
  Sidebar,
  Spacer,
} from '@/common/components';

import {
  MenuOutlineIcon,
  HomeOutlineIcon,
  Trash2OutlineIcon,
  Settings2OutlineIcon,
} from '@/common/icons';

const ExplorerSidebar = () => {
  return (
    <Sidebar>
      <IconButton>
        <MenuOutlineIcon />
      </IconButton>
      <IconButton>
        <HomeOutlineIcon />
      </IconButton>

      <Spacer />

      <IconButton>
        <Trash2OutlineIcon />
      </IconButton>
      <IconButton>
        <Settings2OutlineIcon />
      </IconButton>
    </Sidebar>
  );
};

export default ExplorerSidebar;
