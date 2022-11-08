import { useState, useEffect } from 'react';

import { read } from '../api';

const useGateways = () => {
	const [gateways, setGateways] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const reloader = async () => {
		try {
			setLoading(true);
			const allGateways = await read('gateways');
			setGateways(allGateways);
			setLoading(false);
			setError(null);
		} catch (error) {
			setError(error);
			setLoading(false);
			setGateways([]);
		}
	};

	useEffect(() => {
		reloader();
	}, []);

	return { gateways, loading, error, reloader };
};

export { useGateways };
