import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileAddIcon } from '@/common/icons';

import {
  EmptyWrapper,
  EmptyIcon,
  EmptyDescription,
} from './EmptyFolder.styled';

const EmptyFolder = () => {
  const { t } = useTranslation();
  return (
    <EmptyWrapper>
      <EmptyIcon>
        <FileAddIcon />
      </EmptyIcon>
      <EmptyDescription>{t('explorer.folder.empty')}</EmptyDescription>
    </EmptyWrapper>
  );
};

export default EmptyFolder;
