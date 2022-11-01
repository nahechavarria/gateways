import { fetchData } from './client';

const remove = (endpoint) => {
	const result = fetchData('DELETE', endpoint);
	return result;
};

export { remove };
