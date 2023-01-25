// Libraries
import { ObjectId } from 'mongoose';

// Constants
import { ROLES } from '@constants/roles';

/**
 * This interface describe the user schema
 * @param { ObjectId } _id - optional user's id
 * @param { string } username - user's username
 * @param { string } email - user's email
 * @param { string } password - user's password
 * @param { ROLES } role - user's role
 * @param { boolean } status - user's status
 * @param { boolean } google - user's google
 */
export interface IUser {
	_id?: ObjectId;
	username: string;
	email: string;
	password: string;
	role: ROLES;
	status: boolean;
	google: boolean;
}

/**
 * This interface describe the user test props
 * @param { string } username - user's username
 * @param { string } email - user's email
 * @param { string } password - user's password
 */
export interface IUserTest {
	username: string;
	email: string;
	password: string;
}

/**
 * This interface describe the register props
 * @param { string } username - user's username
 * @param { string } email - user's email
 * @param { string } password - user's password
 */
export interface IRegisterUser {
	username: string;
	email: string;
	password: string;
}

/**
 * This interface describe the login props
 * @param { string } email - user's email
 * @param { string } password - user's password
 */
export interface ILoginUser {
	email: string;
	password: string;
}
