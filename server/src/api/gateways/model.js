import mongoose from 'mongoose';

const gatewaySchema = new mongoose.Schema({
	name: String,
	ip: String,
	devices: [{}],
});

const Gateway = mongoose.model('Gateway', gatewaySchema);

export { Gateway };
