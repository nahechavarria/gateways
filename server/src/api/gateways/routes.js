import { Router } from 'express';

import { GetOne, GetAll, CreateGateway } from './controllers.js';

const gatewayRoutes = Router();

gatewayRoutes.get('/:id', GetOne);
gatewayRoutes.get('/', GetAll);
gatewayRoutes.post('/', CreateGateway);

export { gatewayRoutes };
