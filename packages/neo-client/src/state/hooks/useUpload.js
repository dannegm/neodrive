import { useState } from 'react';
import axios from 'axios';

const apiHost = config.NEO_API_HOST;

const useUpload = (onFinished) => {
  const [isUploading, setIsUploading] = useState(false);

  const upload = async (path, files) => {
    setIsUploading(true);
    try {
      const formData = new FormData();

      [...files].forEach((file) => {
        formData.append('file', file);
      });

      const response = await axios.post(`${apiHost}/file/${path}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onFinished(null, response);
    } catch (err) {
      onFinished(err);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    upload,
    isUploading
  };
};

export default useUpload;
