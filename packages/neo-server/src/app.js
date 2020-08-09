import swagger from 'swagger-ui-express';

import settings from '@/config/settings';
import buildModules from '@/modules';
import swaggerDocument from '@/../swagger.json';

export default function (app) {
  app.use(
    '/documentation',
    swagger.serve,
    swagger.setup(swaggerDocument, { explorer: true })
  );
  app.route('/').all((req, res) => res.redirect(301, '/documentation'));
  buildModules(app);

  const schema = `http://${settings.server.hostname}:${settings.server.port}`;
  app.logger.info(`Listening on ${schema.yellow}`);
  app.listen(settings.server.port);
}
