import mongoose from 'mongoose';

import { Gateway } from './model';
import { service } from './service';

mongoose.connect('mongodb://localhost/gateways');

describe('create', () => {
	test('create gateway properly', async () => {
		const result = await service.create({
			name: 'testGateway',
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

describe('getAll', () => {
	test('get gateways properly', async () => {
		const result = await service.readall();
		expect(result instanceof Array).toBeTruthy();
	});
});

describe('getOne', () => {
	test('type not string id', async () => {
		await expect(service.readone(123123)).rejects.toThrow('Invalid id.');
	});

	test('type anything else but a string', async () => {
		await expect(service.readone(undefined)).rejects.toThrow('Invalid id.');
	});
});

describe('update', () => {
	test('get wrong id', async () => {
		await expect(
			service.update(234234, { name: 'asdasd', ip: '123.123.123' })
		).rejects.toThrow('Invalid id.');
	});

	test('get wrong data', async () => {
		await expect(
			service.update('asdasdasdasdasd123asdasd', {})
		).rejects.toThrow('Invalid input data.');
	});
});

describe('delete', () => {
	test('type not string id', async () => {
		await expect(service.delete(123123)).rejects.toThrow('Invalid id.');
	});

	test('type anything else but a string', async () => {
		await expect(service.delete(undefined)).rejects.toThrow('Invalid id.');
	});
});

describe('create device', () => {
	test('wrong gateway id', async () => {
		await expect(service.createDevice(123123, 'asd', 'asdasd')).rejects.toThrow(
			'Invalid id.'
		);
	});

	test('no string vendor', async () => {
		await expect(
			service.createDevice('asdasd234234', 234234, 'sdfsdf')
		).rejects.toThrow('Invalid input data.');
	});

	test('invalid status', async () => {
		await expect(
			service.createDevice('asdasdasd234234', 'asdasd', 'asdasdas')
		).rejects.toThrow('Invalid input data.');
	});
});

describe('delete device', () => {
	test('wrong gateway id', async () => {
		await expect(service.deviceDeleter(123123123, 234234234)).rejects.toThrow(
			'Invalid gateway id.'
		);
	});

	test('wrong device id', async () => {
		await expect(
			service.deviceDeleter('123123123', '234234234')
		).rejects.toThrow('Invalid device id.');
	});
});
