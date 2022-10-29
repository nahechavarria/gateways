import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
	UID: Number,
	vendor: String,
	creation_date: String,
	status: String,
});

const gatewaySchema = new mongoose.Schema({
	name: String,
	ip: String,
	devices: [deviceSchema],
});

const Gateway = mongoose.model('Gateway', gatewaySchema);

export { Gateway };
