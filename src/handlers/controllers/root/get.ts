import { Request, Response, NextFunction } from 'express';
import get from '../../../services/root/get';

const getRoot = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const root = get();
    res.json({ root });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getRoot;
