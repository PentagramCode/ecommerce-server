// Libraries
import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';

// Models
import UserModel from '@models/user.model';

// Helpers
import generateJWT from '@helpers/jwt.helper';

export const register = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body;
		const newUser = new UserModel({ username, email, password });

		await newUser.save();

		return res.status(201).send({ status: 201, data: newUser });
	} catch (error) {
		return res.status(500).send({ status: 500, error });
	}
};

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email, status: true });

		// Validate if the email exist
		if (!user) {
			return res.status(401).send({ data: { msg: 'Invalid credentials' } });
		}

		// Validate password
		const validPassword = bcryptjs.compareSync(password, user.password);
		if (!validPassword) {
			return res.status(401).send({ data: { msg: 'Invalid credentials' } });
		}

		// Generate JWT
		const token = await generateJWT(user.id);
		return res.status(200).send({ data: { user, token } });
	} catch (error) {
		return res.status(500).send({ status: 500, error });
	}
};
