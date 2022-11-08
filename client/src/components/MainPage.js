import { Link } from 'react-router-dom';

import { useGateways } from '../hooks/useGateways';
import { GatewayCard } from './GatewayCard';
import { Error } from './Error';

import styles from './MainPage.module.css';

const MainPage = () => {
	const { gateways, loading, error, reloader } = useGateways();

	if (error) <Error />;

	return (
		<div className={styles.app}>
			<div className={styles.body}>
				{loading ? (
					<p>Loading...</p>
				) : gateways.response && gateways.response.length > 0 ? (
					<div className={styles.cardsContainer}>
						{gateways.response.map((gateway) => (
							<GatewayCard key={gateway._id} gateway={gateway} />
						))}
					</div>
				) : (
					<div className={styles.buttonContainer}>
						<button>
							<Link to="/create-gateway"> Add Gateway</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export { MainPage };
