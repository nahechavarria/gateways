import styles from './GatewayCard.module.css';

const GatewayCard = ({ gateway }) => {
	let tableNumber = 1;
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>{gateway.name}</h1>
				<h3>{gateway.ip}</h3>
			</div>
			<hr />
			<div className={styles.body}>
				{gateway.devices && gateway.devices.length > 0 ? (
					<table>
						<thead>
							<tr>
								<th></th>
								<th>UID</th>
								<th>VENDOR</th>
								<th>CREATION DATE</th>
								<th>STATUS</th>
							</tr>
						</thead>

						{gateway.devices.map((device) => (
							<tbody key={device._id}>
								<tr>
									<th>{tableNumber++}.</th>
									<th>{device.uid}</th>
									<th>{device.vendor}</th>
									<th>{device.creation_date}</th>
									<th>{device.status}</th>
								</tr>
							</tbody>
						))}
					</table>
				) : (
					<div>No devices</div>
				)}
			</div>
		</div>
	);
};

export { GatewayCard };
