import { prisma } from "../database.js";

async function createDiscipline(disciplineName: string, termId: number) {
  await prisma.disciplines.create({
    data: {
      name: disciplineName,
      termId: termId,
    },
  });
}

async function getAllDisciplines() {
  const search = await prisma.disciplines.findMany();
  return search;
}

async function findDisciplineByName(disciplineName: string) {
  const search = await prisma.disciplines.findFirst({
    where: {
      name: disciplineName,
    },
  });
  return search;
}

export default {
  createDiscipline,
  getAllDisciplines,
  findDisciplineByName,
};
