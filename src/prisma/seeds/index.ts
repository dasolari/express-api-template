/* eslint-disable no-console */
import Prisma from '@prisma/client';

const prismaClient = new Prisma.PrismaClient();

const seeder = async () => {
  // add seeds here
};

seeder()
  .catch((error) => {
    console.error(`There was an error while seeding the database: ${error}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prismaClient.$disconnect();
  });
