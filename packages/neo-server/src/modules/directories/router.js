import { getContent } from './controller';

export default function router(app) {
  app.route('/dir/*').get(getContent);
}
