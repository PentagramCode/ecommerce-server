// Libraries
import request from 'supertest';

// Servers
import Server from '../../src/servers/server';

const server = new Server();

describe('testing route start.route.ts', () => {
	test('should respond with a 200 status code', async () => {
		const response = await request(server.app).get('/api/ping').send();
		expect(response.statusCode).toBe(200);
	});

	test('should respond with a "pong', (done) => {
		request(server.app)
			.get('/api/ping')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				expect(res.body).toMatchObject({ message: 'pong' });
				done();
			});
	});
});
