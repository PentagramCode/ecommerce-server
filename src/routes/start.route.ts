// Libraries
import { Router } from 'express';

// Controllers
import { ping } from '@controllers/start.controller';

const router = Router();

router.get('/ping', ping);

export default router;
