import { Gateway } from './model.js';
import { validateIP } from '../../utils/validateIP.js';

const service = {
	async create(data) {
		if (!data.name || !data.ip) throw new Error('Invalid input data.');
		if (JSON.stringify(data) === '{}') throw new Error('Invalid input data.');
		if (!validateIP(data.ip)) throw new Error('Invalid ip address.');

		const newGateway = new Gateway(data);
		return newGateway.save();
	},
};

export { service };
