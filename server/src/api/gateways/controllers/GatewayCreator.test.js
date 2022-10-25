import { GatewayCreator } from './GatewayCreator';

describe('GatewayCreator.js', () => {
	test('properly adds a gateway', () => {
		expect(GatewayCreator({ name: 'test', ip: '192.168.1.1' })).toBe({
			name: 'test',
			ip: '192.168.1.1',
		});
	});

	test('entry a empty object', () => {
		expect(GatewayCreator({}).toBe('A gateway most be enter'));
	});

	test('enter anything but an object', () => {
		expect(GatewayCreator('').toBe('A object most be enter'));
	});
});
