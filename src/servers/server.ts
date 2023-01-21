// Libraries
import express, { Application } from 'express';
import cors from 'cors';

// Config
import dbConnection from '@config/dbConnection';

// Routes
import StartRoute from '@routes/start.route';
import AuthRoute from '@routes/auth.route';

class Server {
	public app: Application;
	private readonly port: string;

	constructor() {
		this.port = process.env.PORT ?? '';
		this.app = express();

		this.middlewares();
		this.routes();
	}

	async runDatabase() {
		await dbConnection();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {
		this.app.use('/api/start/', StartRoute);
		this.app.use('/api/auth/', AuthRoute);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server listening on port ${this.port} ✅`);
		});
		this.runDatabase();
	}
}

export default Server;
