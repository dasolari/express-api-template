import prismaClient from '../../prisma/client';
import { CreateHelloArgs } from './types';

const createHello = async (args: CreateHelloArgs) => {
  const hello = await prismaClient.hello.create({
    data: {
      ...args,
    }
  });
  return hello;
};

export default createHello;
