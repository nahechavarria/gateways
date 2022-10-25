import { Gateway } from './model';

const createGateway = (data) => {
	const newGateway = new Gateway(data);
	return newGateway.save();
};

export { createGateway };
