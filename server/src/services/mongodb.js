import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost/gateways')
	.then(() => console.log('Connection to database successfully'))
	.catch((e) => console.log(e));
