import { Router } from 'express';

import { CreateGateway } from './controllers.js';

const gatewayRoutes = Router();

gatewayRoutes.post('/', CreateGateway);

export { gatewayRoutes };
