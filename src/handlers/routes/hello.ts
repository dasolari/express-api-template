import { Router } from 'express';
import getHello from '../controllers/hello/get';
import createHello from '../controllers/hello/create';

const router = Router();

router.get('/', getHello);
router.post('/', createHello);

export default router;
