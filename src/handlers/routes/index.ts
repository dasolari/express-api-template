import { Router } from 'express';
import rootRoutes from './root';
import helloRoutes from './hello';

const router = Router();

router.use(async (_req, _res, next) => {
  next();
});

router.use('/', rootRoutes);
router.use('/hello', helloRoutes);

export default router;
