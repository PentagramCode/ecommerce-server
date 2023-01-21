// Libraries
import { Router } from 'express';

// Controllers
import { login, register } from '@controllers/auth.controller';

// Validations
import { loginUser, registerUser } from '@validations/auth.validation';

const router = Router();

router.post('/register', registerUser, register);
router.post('/login', loginUser, login);

export default router;
