import { service } from './service.js';

const GetOne = async (req, res) => {
	try {
		const id = req.params.id;
		res.json(await service.readone(id));
	} catch (error) {
		res.json({ status: 'error', error: error.message });
	}
};

const GetAll = async (req, res) => {
	try {
		res.json(await service.readall());
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

export { GetOne, GetAll, CreateGateway };
