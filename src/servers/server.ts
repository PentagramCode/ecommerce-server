import express, { Application } from 'express';
import cors from 'cors';

// Interfaces
import { IPaths } from '@interfaces/Paths';

// Routes
import StartRoutes from '@routes/start.route';

// Config
import dbConnection from '@config/dbConnection';

class Server {
	private readonly port: string;
	public app: Application;
	private readonly paths: IPaths;

	constructor() {
		this.port = process.env.PORT ?? '';
		this.app = express();
		this.paths = {
			start: '/api',
		};

		this.runDatabase();
		this.middlewares();
		this.routes();
	}

	async runDatabase(): Promise<void> {
		await dbConnection();
	}

	middlewares(): void {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes(): void {
		this.app.use(this.paths.start, StartRoutes);
	}

	listen(): void {
		this.app.listen(this.port, () => {
			console.log(`Server listening on port ${this.port} ✅`);
		});
	}
}

export default Server;
