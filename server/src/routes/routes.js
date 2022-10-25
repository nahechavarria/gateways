import { Router } from 'express';

const routes = Router();

routes.all('*', (req, res) => {
	res.sendStatus(404);
});

export { routes };
