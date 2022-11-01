import { fetchData } from './client';

const read = (endpoint) => {
	const result = fetchData('GET', endpoint);
	return result;
};

export { read };
