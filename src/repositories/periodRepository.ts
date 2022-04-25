import { prisma } from "../database.js";

async function createPeriod(number: number) {
  await prisma.terms.create({
    data: {
      number: number,
    },
  });
}

async function findPeriod(number: number) {
  const result = await prisma.terms.findFirst({
    where: {
      number: number,
    },
  });
  return result;
}

async function findAllPeriods() {
  const result = await prisma.terms.findMany();
  return result;
}

export default { createPeriod, findPeriod, findAllPeriods };
