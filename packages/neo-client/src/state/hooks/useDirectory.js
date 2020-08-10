import { useEffect, useState } from 'react';
import axios from 'axios';

const apiHost = config.NEO_API_HOST;

export const processPath = (fullPat) => {
  const cachedPath = fullPat || '/';
  const splittedPath = cachedPath !== '/' ? cachedPath.split('/') : [];
  return splittedPath.map((folder, index) => {
    const context = [...splittedPath].splice(0, index).join('/');
    return {
      path: index === 0 ? folder : `${context}/${folder}`,
      base: context,
      name: folder
    };
  });
};

const useDirectory = (path = '/') => {
  const [currentPath, setPath] = useState(path);
  const [content, setContent] = useState({ files: [], folders: [] });

  const listDirectory = async () => {
    const response = await axios.get(
      `${apiHost}/dir/${currentPath !== '/' ? currentPath : ''}`
    );
    setContent(response.data.data.content);
  };

  useEffect(() => {
    listDirectory();
  }, [currentPath]);

  return {
    currentPath,
    content,
    setPath,
    listDirectory
  };
};

export default useDirectory;
