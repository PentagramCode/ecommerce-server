// Libraries
import jwt from 'jsonwebtoken';

/**
 * This function generates a session token and returns it
 * @param { string } id - id user
 */
const generateJWT = async (id: string): Promise<string> => {
	try {
		const secretKey = process.env.SECRET_PRIVATE_KEY ?? 'testsecret';
		const payload = { id };
		const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });

		return token;
	} catch (error) {
		console.log(error);
		return `Could not generate token 💀`;
	}
};

export default generateJWT;
