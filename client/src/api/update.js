import { fetchData } from './client';

const update = (endpoint, payload) => {
	const result = fetchData('PUT', endpoint, payload);
	return result;
};

export { update };
