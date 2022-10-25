import { Gateway } from './model';
import { gatewayService } from './service';

describe('create', () => {
	test('create gateway properly', async () => {
		const result = await gatewayService.create({
			name: 'calimete',
			ip: '192.168.1.1',
		});
		expect(result instanceof Gateway).toBeTruthy();
	});

	test('entry an empty object', () => {
		expect(gatewayService.create({})).reject.toThrow('Invalid input data.');
	});

	test('entry anything else but an object', () => {
		expect(gatewayService.create('sss')).reject.toThrow('Invalid input data.');
	});
});
