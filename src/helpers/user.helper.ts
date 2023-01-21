// Models
import UserModel from '@models/user.model';

/**
 * This function searches the database for a user with the same name and returns an error if found
 * @param { string } username - username to search
 */
export const existUsername = async (username: string) => {
	const usernameDB = await UserModel.findOne({ username, status: true });
	if (usernameDB) {
		throw new Error(`This username ${username} is already registered`);
	}
};

/**
 * This function searches the database for a user with the same email and returns an error if found
 * @param { string } email - email to search
 */
export const existEmail = async (email: string) => {
	const emailDB = await UserModel.findOne({ email, status: true });
	if (emailDB) {
		throw new Error(`This username ${email} is already registered`);
	}
};
