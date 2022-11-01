import { fetchData } from './client';

const create = (endpoint, payload) => {
	const result = fetchData('POST', endpoint, payload);
	return result;
};

export { create };
