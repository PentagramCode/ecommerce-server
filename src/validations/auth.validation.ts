// Libraries
import { check } from 'express-validator';

// Helpers
import validateResult from '@helpers/validate.helper';
import { existEmail, existUsername } from '@helpers/user.helper';

export const registerUser = [
	check('username', 'username is required').exists().isString().withMessage('username is string').custom(existUsername),
	check('email', 'email is required').exists().isEmail().withMessage('email is invalid').custom(existEmail),
	check('password', 'password is required').exists().isLength({ min: 8 }).withMessage('must be at least 8 chars long'),
	validateResult,
];

export const loginUser = [
	check('email', 'email is required').exists().isEmail().withMessage('email is invalid'),
	check('password', 'password is required').not().isEmpty().isLength({ min: 8 }).withMessage('must be at least 8 chars long'),
	validateResult,
];
