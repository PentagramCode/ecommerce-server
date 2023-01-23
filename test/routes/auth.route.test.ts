// Libraries
import request, { Response } from 'supertest';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Serviers
import Server from '../../src/servers/server';

// Models
import UserModel from '../../src/models/user.model';

// Utils
import { badLogin, badRegister, loginUser, registerUser } from '../utils/auth';

// Config
import { dbConnectionTest, dbDisconnectTest } from '../config/dbConnection';

const server = new Server();

describe('Auth Route Tests', () => {
	beforeAll(async () => {
		await dbConnectionTest();
	});

	afterAll(async () => {
		await dbDisconnectTest();
	});

	describe('POST /api/auth/register', () => {
		let response: Response;
		let responseBad: Response;

		beforeAll(async () => {
			response = await request(server.app).post('/api/auth/register').send(registerUser);
			responseBad = await request(server.app).post('/api/auth/register').send(badRegister);
		});

		afterAll(async () => {
			await UserModel.deleteMany({ username: 'test user' });
		});

		test('should return a status 201 and return json', async () => {
			expect(response.statusCode).toBe(201);
			expect(response.headers['content-type']).toContain('json');
		});

		test('should must register the user ', async () => {
			expect(response.body.data._id).toBeDefined();
			expect(response.body.data.username).toBe(registerUser.username);
		});

		test('should return a status 400 and an array errors ', () => {
			expect(responseBad.status).toBe(400);
			expect(responseBad.body.errors).toBeInstanceOf(Array);
		});
	});

	describe('POST /api/auth/login', () => {
		let response: Response;
		let responseBad: Response;

		beforeAll(async () => {
			await request(server.app).post('/api/auth/register').send(registerUser);
			response = await request(server.app).post('/api/auth/login').send(loginUser);
			responseBad = await request(server.app).post('/api/auth/login').send(badLogin);
		});

		afterAll(async () => {
			await UserModel.deleteMany({ username: 'test user' });
		});

		test('should return a status 200 and return json', async () => {
			expect(response.statusCode).toBe(200);
			expect(response.headers['content-type']).toContain('json');
		});

		test('should must login the user ', async () => {
			expect(response.body.data.user._id).toBeDefined();
			expect(response.body.data.token).toBeDefined();
		});

		test('should return a status 401 and a error message ', () => {
			expect(responseBad.status).toBe(401);
			expect(responseBad.body.data.msg).toBe('Invalid credentials');
		});
	});
});
