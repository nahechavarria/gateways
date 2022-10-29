import { Router } from 'express';

import { controller } from './controller.js';

const gatewayRoutes = Router();

gatewayRoutes.get('/:id', controller.getOne);
gatewayRoutes.get('/', controller.getAll);
gatewayRoutes.post('/', controller.createGateway);
gatewayRoutes.put('/:id', controller.updateGateway);
gatewayRoutes.delete('/:id', controller.deleteGateway);
gatewayRoutes.put('/createdevice/:id', controller.createDevice);

export { gatewayRoutes };
