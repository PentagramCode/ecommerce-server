// Libraries
import { model, Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

// Interfaces
import { IUser } from '@interfaces/User';

// Constants
import { ROLES } from '@constants/roles';

const UserSchema = new Schema<IUser>(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		status: { type: Boolean, default: true },
		google: { type: Boolean, default: false },
		role: { type: String, enum: ROLES, default: ROLES.client },
	},
	{
		timestamps: true,
	}
);

/**
 * This function excludes user properties when saving
 * @returns IUser
 */
UserSchema.methods.toJSON = function (): IUser {
	const { __v, password, ...user } = this.toObject();
	return user;
};

/**
 * This function encrypts the password before saving the user.
 * @constructor
 * @param next - action to continue the process
 */
UserSchema.pre('save', async function (next) {
	try {
		const user = this;
		const salt = bcryptjs.genSaltSync(10);
		user.password = bcryptjs.hashSync(user.password, salt);
		next();
	} catch (error) {
		throw new Error(`Password encryption error ${error} 💀`);
	}
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
