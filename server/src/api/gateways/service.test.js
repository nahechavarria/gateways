import mongoose from 'mongoose';

import { Gateway } from './model';
import { service } from './service';

mongoose.connect('mongodb://localhost/gateways');

describe('create', () => {
	test('create gateway properly', async () => {
		const result = await service.create({
			name: 'calimete',
			ip: '192.168.1.1',
		});

		expect(result instanceof Gateway).toBeTruthy();
	});

	test('entry an empty object', async () => {
		await expect(service.create({})).rejects.toThrow('Invalid input data.');
	});

	test('entry invalid ip address', async () => {
		await expect(
			service.create({ name: 'ss', ip: '192.300.400.500' })
		).rejects.toThrow('Invalid ip address.');
	});

	test('entry anything else but an object', async () => {
		await expect(service.create('sss')).rejects.toThrow('Invalid input data.');
	});
});
