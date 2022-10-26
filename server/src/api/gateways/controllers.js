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

const UpdateGateway = async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;
		const result = await service.update(id, data);
		res.json(result);
	} catch (error) {
		res.json({ status: 'error', error: error.message });
	}
};

const DeleteGateway = async (req, res) => {
	try {
		const id = req.params.id;
		await service.delete(id);
		res.json({ status: 'success', response: 'Deleted successfully' });
	} catch (error) {
		res.json({ status: 'error', error: error.message });
	}
};

export { GetOne, GetAll, CreateGateway, UpdateGateway, DeleteGateway };
