import fs from 'fs';
import path from 'path';

import { OK, NOT_FOUND } from '@/utils/responses';

const STORAGE_PATH = process.env.STORAGE_PATH;

const getContent = async (req, res) => {
  try {
    const dirPath = path.join(STORAGE_PATH, req.params[0]);
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

    const response = { path: dirPath, content };
    OK(res, response);
  } catch (err) {
    const respose = {
      path: `~/${req.params[0]}`,
    };
    NOT_FOUND(res, respose);
  }
};

export { getContent };
