import { service } from './service.js';

const GetAll = async (req, res) => {
	try {
		res.json(await service.read());
	} catch (error) {
		res.json({ status: 'error', error: error.message });
	}
};

const CreateGateway = async (req, res) => {
	try {
		const data = req.body;
		const result = await service.create(data);
		res.json(result);
	} catch (error) {
		res.json({ status: 'error', error: error.message });
	}
};

export { GetAll, CreateGateway };
