import { Gateway } from './model.js';
import { validateIP } from '../../utils/validateIP.js';

const service = {
	async readall() {
		return Gateway.find() ?? [];
	},

	async readone(id) {
		if (!id || typeof id !== 'string') throw new Error('Invalid id.');
		return Gateway.findById(id);
	},

	async create(data) {
		if (!data.name || !data.ip) throw new Error('Invalid input data.');
		if (JSON.stringify(data) === '{}') throw new Error('Invalid input data.');
		if (!validateIP(data.ip)) throw new Error('Invalid ip address.');

		const newGateway = new Gateway(data);
		return newGateway.save();
	},

	async update(id, data) {
		if (!id || typeof id !== 'string') throw new Error('Invalid id.');
		if (JSON.stringify(data) === '{}') throw new Error('Invalid input data.');
		if (!validateIP(data.ip)) throw new Error('Invalid ip address.');

		const { name, ip } = data;
		await Gateway.findByIdAndUpdate(id, { name, ip });
		return Gateway.findById(id);
	},

	async delete(id) {
		if (!id || typeof id !== 'string') throw new Error('Invalid id.');

		return Gateway.findByIdAndDelete(id);
	},
};

export { service };
