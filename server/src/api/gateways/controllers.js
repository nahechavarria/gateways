import { service } from './service.js';

const CreateGateway = async (req, res) => {
	try {
		const data = req.body;
		const result = await service.create(data);
		res.json(result);
	} catch (error) {
		res.json({ status: 'error', error: error.message });
	}
};

export { CreateGateway };
