const url = 'http://localhost:3003/api';

const fetchData = (method, endpoint, payload) => {
	const options = {
		method,
		'Content-Type': 'application/json',
	};

	if (payload) options.body = payload;

	try {
		const result = fetch(`${url}/${endpoint}`, options);
		return result;
	} catch (error) {
		throw new Error('Error fetching with the API.');
	}
};

export { fetchData };
