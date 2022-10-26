import { Router } from 'express';

import { GetOne, GetAll, CreateGateway, UpdateGateway } from './controllers.js';

const gatewayRoutes = Router();

gatewayRoutes.get('/:id', GetOne);
gatewayRoutes.get('/', GetAll);
gatewayRoutes.post('/', CreateGateway);
gatewayRoutes.put('/:id', UpdateGateway);

export { gatewayRoutes };
