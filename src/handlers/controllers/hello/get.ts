import { Request, Response } from 'express';
import get from "../../../actions/hello/get";

const getHello = async (_req: Request, res: Response) => {
  const hello = await get();
  res.json({ hello });
};

export default getHello;
