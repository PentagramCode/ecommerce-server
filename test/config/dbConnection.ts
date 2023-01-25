import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoDB: MongoMemoryServer;

/**
 * Database test connection
 */
export const dbConnectionTest = async (): Promise<void> => {
	mongoDB = await MongoMemoryServer.create();
	const mongoUri = mongoDB.getUri();
	await mongoose.connect(mongoUri);
};

/**
 * Database test disconnection
 */
export const dbDisconnectTest = async () => {
	await mongoose.disconnect();
	await mongoDB.stop();
};
