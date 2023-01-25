// Libraries
import express, { Application } from 'express';
import cors from 'cors';

// Config
import dbConnection from '@config/dbConnection';

// Routes
import AuthRoute from '@routes/auth.route';

class Server {
	public app: Application;
	private readonly port: string;

	// Routes
	private readonly authRoute = new AuthRoute();

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
		this.authRoute.routes(this.app);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server listening on port ${this.port} ✅`);
		});
		this.runDatabase();
	}
}

export default Server;
