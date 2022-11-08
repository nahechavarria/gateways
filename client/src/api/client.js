const url = 'http://localhost:3003/api';

const fetchData = async (method, endpoint, payload) => {
	const options = {
		method,
		'Content-Type': 'application/json',
	};

	if (payload) options.body = payload;

	try {
		const result = await fetch(`${url}/${endpoint}`, options);
		return result.json();
	} catch (error) {
		throw new Error('Error fetching with the API.');
	}
};

export { fetchData };
