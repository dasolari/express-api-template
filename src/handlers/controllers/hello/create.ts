import { Request, Response, NextFunction } from 'express';
import create from '../../../services/hello/create';

const createHello = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hello = await create(req.body);
    res.json({ hello });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default createHello;
