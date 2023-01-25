import AuthController from '@controllers/auth.controller';
import { loginUser, registerUser } from '@validations/auth.validation';
import { Application } from 'express';

class AuthRoute {
	private readonly authController: AuthController;

	constructor() {
		this.authController = new AuthController();
	}

	public routes(app: Application) {
		app.route('/api/auth/register').post(registerUser, this.authController.registerController);
		app.route('/api/auth/login').post(loginUser, this.authController.loginController);
	}
}

export default AuthRoute;
