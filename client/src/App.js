import { Routes, Route } from 'react-router-dom';

import { MainPage } from './components/MainPage';
import { CreateGatewayForm } from './components/CreateGatewayForm';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/create-gateway" element={<CreateGatewayForm />} />
		</Routes>
	);
}

export default App;
