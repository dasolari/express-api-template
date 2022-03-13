import { Router } from 'express';
import getRoot from '../controllers/root/get';

const router = Router();

router.get('/', getRoot);

export default router;
