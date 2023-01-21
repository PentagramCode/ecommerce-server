import { connect } from 'mongoose';

/**
 * Database connection
 */
const dbConnection = async (): Promise<void> => {
	const mongoUri: string = process.env.MONGO_URI ?? '';
	try {
		await connect(mongoUri);
		console.log('Database Online ✅');
	} catch (error) {
		console.log(`Database connection error ${error} 💀`);
	}
};

export default dbConnection;
