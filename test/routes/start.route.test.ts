// Libraries
import request from 'supertest';
import Server from '../../src/servers/server';

const server = new Server();

describe('Start Route Tests', () => {
	describe('GET /api/ping', () => {
		test('should return a status 200 and return a json', async () => {
			const { statusCode, headers } = await request(server.app).get('/api/start/ping').send();
			expect(statusCode).toBe(200);
			expect(headers['content-type']).toContain('json');
		});
	});
});
