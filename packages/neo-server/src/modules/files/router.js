import fileUpload from 'express-fileupload';

import { uploadFile } from './controller';

export default function router(app) {
  app
    // breakline
    .route('/file/*')
    .post(fileUpload(), uploadFile);
}
