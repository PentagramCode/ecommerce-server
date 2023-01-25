// Libraries
import { faker } from '@faker-js/faker';

/**
 * Payload Test
 */
export const userTest = {
	username: faker.internet.userName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
};

/**
 * Payload Test
 */
export const badRegister = {
	bad: 'badRegister',
};

/**
 * Payload Test
 */
export const badLogin = {
	email: faker.internet.email(),
	password: faker.internet.password(),
};
