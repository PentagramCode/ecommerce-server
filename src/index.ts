import dotenv from 'dotenv';

// Servers
import Server from '@servers/server';

dotenv.config({
	path: `${
		process.env.NODE_ENV === 'production'
			? '.production.env'
			: '.development.env'
	}`,
});

const server = new Server();
server.listen();
