import { PrismaClient } from '@prisma/client';

declare global {
  const prisma: PrismaClient | any;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  console.log('Production DATABASE_URL:', process.env.DATABASE_URL);
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    console.log('Development DATABASE_URL:', process.env.DATABASE_URL);
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;