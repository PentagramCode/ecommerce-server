import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const dbConnectionTest = async (): Promise<void> => {
	const mongo = await MongoMemoryServer.create();
	const mongoUri = mongo.getUri();

	await mongoose.connect(mongoUri);
};

export const dbDisconnectTest = async (): Promise<void> => {
	const mongo = await MongoMemoryServer.create();
	await mongo.stop();
};