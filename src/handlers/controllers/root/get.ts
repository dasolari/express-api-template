import { Request, Response } from 'express';
import get from '../../../actions/root/get';

const getRoot = async (_req: Request, res: Response) => {
  const root = get();
  res.json({ root });
};

export default getRoot;
