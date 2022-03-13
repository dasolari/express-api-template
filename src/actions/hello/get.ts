import prismaClient from '../../prisma/client';

const getHello = async () => {
  const hellos = await prismaClient.hello.findMany();
  const hello = hellos.splice(-1)[0];
  return hello;
};

export default getHello;
