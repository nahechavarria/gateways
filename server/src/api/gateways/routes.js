import { Router } from 'express';

import { GetAll, CreateGateway } from './controllers.js';

const gatewayRoutes = Router();

gatewayRoutes.get('/', GetAll);
gatewayRoutes.post('/', CreateGateway);

export { gatewayRoutes };
