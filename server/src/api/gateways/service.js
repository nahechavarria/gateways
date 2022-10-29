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

	async deviceCreator(gatewayId, vendor, status) {
		if (!id || typeof id !== 'string') throw new Error('Invalid id.');
		if (typeof vendor !== 'string') throw new Error('Invalid input data.');
		if (status !== 'online' && status !== 'offline')
			throw new Error(
				'Invalid input data. Status valid values are "online" or "offline".'
			);

		const gateway = await Gateway.findById(gatewayId);

		if (!gateway) throw new Error('No gateway found.');

		const newDevice = {
			uid: Date.now(),
			vendor,
			creation_date: new Date().toLocaleDateString(),
			status,
		};

		gateway.devices.push(newDevice);
		return Gateway.findById(gatewayId);
	},

	async deviceDeleter(gatewayId, uid) {},
};

export { service };
