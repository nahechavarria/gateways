import { service } from './service.js';

const controller = {
	async getOne(req, res) {
		try {
			const id = req.params.id;
			res.json({ status: 'success', response: await service.readone(id) });
		} catch (error) {
			res.json({ status: 'error', error: error.message });
		}
	},

	async getAll(req, res) {
		try {
			res.json({ status: 'success', response: await service.readall() });
		} catch (error) {
			res.json({ status: 'error', error: error.message });
		}
	},

	async createGateway(req, res) {
		try {
			const data = req.body;
			const result = await service.create(data);
			res.json({ status: 'success', response: result });
		} catch (error) {
			res.json({ status: 'error', error: error.message });
		}
	},

	async updateGateway(req, res) {
		try {
			const id = req.params.id;
			const data = req.body;
			const result = await service.update(id, data);
			res.json({ status: 'success', response: result });
		} catch (error) {
			res.json({ status: 'error', error: error.message });
		}
	},

	async deleteGateway(req, res) {
		try {
			const id = req.params.id;
			await service.delete(id);
			res.json({ status: 'success', response: 'deleted successfully' });
		} catch (error) {
			res.json({ status: 'error', error: error.message });
		}
	},
};

export { controller };
