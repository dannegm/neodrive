import { getContent, createFolder } from './controller';

export default function router(app) {
  app
    // breakline
    .route('/dir/*')
    .get(getContent)
    .post(createFolder);
}
