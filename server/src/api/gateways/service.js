import { Gateway } from './model';
import { validateIP } from '../../utils/validateIP';

const service = {
	async create(data) {
		if (JSON.stringify(data) === '{}') throw new Error('Invalid input data.');
		if (!(data instanceof Gateway)) throw new Error('Invalid input data.');
		if (data && !validateIP(data)) throw new Error('Invalid ip address.');

		const newGateway = new Gateway(data);
		const result = await newGateway.save();
		console.log(result);
		return result;
	},
};

export { service };
