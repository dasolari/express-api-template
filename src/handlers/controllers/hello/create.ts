import { Request, Response } from 'express';
import create from '../../../actions/hello/create';

const createHello = async (req: Request, res: Response) => {
  const hello = await create(req.body);
  res.json({ hello });
};

export default createHello;
