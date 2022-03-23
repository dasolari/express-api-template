import { Request, Response, NextFunction } from 'express';
import get from '../../../services/hello/get';

const getHello = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const hello = await get();
    res.json({ hello });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default getHello;
