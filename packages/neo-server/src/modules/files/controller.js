import fs from 'fs';
import path from 'path';

import { OK, BAD_REQUEST } from '@/utils/responses';

const STORAGE_PATH = process.env.STORAGE_PATH;

const moveFile = async (file, targetPath) => {
  const filePath = path.join(targetPath, file.name);
  try {
    await fs.promises.access(filePath);
    return Promise.reject({
      file: file.name,
      message: 'File already exists',
    });
  } catch (_err) {
    file.mv(filePath, (err) => {
      if (err) {
        throw err;
      }

      return file;
    });
  }
};

const uploadFile = async (req, res) => {
  const basePath = `~/${req.params[0]}`;
  const dirPath = path.join(STORAGE_PATH, req.params[0]);

  try {
    await fs.promises.access(dirPath);
  } catch (err) {
    BAD_REQUEST(res, {
      basePath,
      message: 'Target directory does not exists.',
    });
  }

  if (!req.files) {
    BAD_REQUEST(res, { message: 'Please, provide a file.' });
  }

  let files = req.files.file;
  if (!Array.isArray(files)) {
    files = [files];
  }

  const statuses = [];
  for (const file of files) {
    try {
      await moveFile(file, dirPath);
      statuses.push({
        file: file.name,
        status: 'uploaded',
      });
    } catch (err) {
      statuses.push({
        file: file.name,
        status: 'rejected',
        reason: err,
      });
    }
  }

  OK(res, {
    basePath,
    statuses,
  });
};

export { uploadFile };
