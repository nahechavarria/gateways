import { Router } from 'express';

import {
	GetOne,
	GetAll,
	CreateGateway,
	UpdateGateway,
	DeleteGateway,
} from './controllers.js';

const gatewayRoutes = Router();

gatewayRoutes.get('/:id', GetOne);
gatewayRoutes.get('/', GetAll);
gatewayRoutes.post('/', CreateGateway);
gatewayRoutes.put('/:id', UpdateGateway);
gatewayRoutes.delete('/:id', DeleteGateway);

export { gatewayRoutes };
