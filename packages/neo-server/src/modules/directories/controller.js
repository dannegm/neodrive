import fs from 'fs';
import path from 'path';

import {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_ERROR
} from '@/utils/responses';

const STORAGE_PATH = process.env.STORAGE_PATH;

const getContent = async (req, res) => {
  const basePath = req.params[0];
  const dirPath = path.join(STORAGE_PATH, basePath);
  try {
    const directory = await fs.promises.opendir(dirPath);

    const content = { files: [], folders: [] };

    for await (const element of directory) {
      if (element.isDirectory()) {
        content.folders.push(element.name);
      } else {
        content.files.push(element.name);
      }
    }

    content.folders.sort();
    content.files.sort();

    OK(res, { basePath, content });
  } catch (err) {
    NOT_FOUND(res, {
      basePath
    });
  }
};

const createFolder = async (req, res) => {
  const basePath = req.params[0];
  try {
    const dirPath = path.join(STORAGE_PATH, basePath);
    const name = req.body.name;

    if (!name) {
      BAD_REQUEST(res, 'Please, provide a valid name');
    }

    const newFolderPath = path.join(dirPath, name.trim());

    await fs.promises.mkdir(newFolderPath);

    CREATED(res, {
      name,
      basePath
    });
  } catch (err) {
    INTERNAL_ERROR(res, err);
  }
};

export { getContent, createFolder };
