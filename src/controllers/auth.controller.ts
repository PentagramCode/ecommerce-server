import AuthService from '@services/auth.service';
import { Request, Response } from 'express';

class AuthController {
	private readonly authService: AuthService;

	constructor() {
		this.authService = new AuthService();
	}

	public registerController = async (req: Request, res: Response) => {
		const { status, data } = await this.authService.registerService(req.body);
		return res.status(status).send(data);
	};

	public loginController = async (req: Request, res: Response) => {
		const { status, data } = await this.authService.loginService(req.body);
		return res.status(status).send(data);
	};
}

export default AuthController;
