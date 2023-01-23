import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoDB: MongoMemoryServer;

export const dbConnectionTest = async (): Promise<void> => {
	mongoDB = await MongoMemoryServer.create();
	const mongoUri = mongoDB.getUri();
	await mongoose.connect(mongoUri);
};

export const dbDisconnectTest = async () => {
	await mongoose.disconnect();
	await mongoDB.stop();
};
