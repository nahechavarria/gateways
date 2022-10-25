import { Gateway } from './model';
import { service } from './service';

describe('create', () => {
	test('create gateway properly', async () => {
		const result = await service.create({
			name: 'calimete',
			ip: '192.168.1.1',
		});
		console.log(result);
		expect(result instanceof Gateway).toBeTruthy();
	});

	test('entry an empty object', async () => {
		await expect(service.create({})).rejects.toThrow('Invalid input data.');
	});

	test('entry anything else but an object', async () => {
		await expect(service.create('sss')).rejects.toThrow('Invalid input data.');
	});
});
