import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useUpload from '@/state/hooks/useUpload';

import { CloudUploadOutlineIcon } from '@neo/ui/lib/icons';

import {
  DropZoneWrapper,
  DropZoneMessage,
  DropZoneIcon,
  DropZoneDescription
} from './DropZone.styled';

const DropZone = ({ children, onSuccess, onError, onFinished }) => {
  const { t } = useTranslation();
  const dropZone = useRef();
  const { folder } = useParams();

  const [isDragOver, setIsDragOver] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
    setIsDragOver(e.target === dropZone.current);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const { upload } = useUpload((err, res) => {
    if (err) {
      return onError(err);
    }

    onSuccess(res);
    onFinished(err, res);
  });

  const fileDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    upload(folder ? folder : '', files);
  };

  return (
    <DropZoneWrapper
      ref={dropZone}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      dragOver={isDragOver}
    >
      {isDragOver && (
        <DropZoneMessage>
          <DropZoneIcon>
            <CloudUploadOutlineIcon />
          </DropZoneIcon>
          <DropZoneDescription>
            {t('explorer.folder.dropZone')}
          </DropZoneDescription>
        </DropZoneMessage>
      )}
      {children}
    </DropZoneWrapper>
  );
};

DropZone.propTypes = {
  children: PropTypes.node.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  onFinished: PropTypes.func
};

DropZone.defaultProps = {
  onSuccess: () => null,
  onError: () => null,
  onFinished: () => null
};

export default DropZone;
