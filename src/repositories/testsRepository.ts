import { prisma } from "../database.js";

export interface Test {
  name: string;
  pdfUrl: string;
  categoryId: number;
  teacherDisciplineId: number;
}

async function createTest(testData: Test) {
  console.log("chegou no repository");
  const t = await prisma.tests.create({
    data: {
      name: testData.name,
      pdfUrl: testData.pdfUrl,
      categoryId: testData.categoryId,
      teacherDisciplineId: testData.teacherDisciplineId,
    },
  });
}

async function findTestsByPeriod(period: number) {
  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        discipline: {
          term: {
            number: period,
          },
        },
      },
    },
    include: {
      category: true,
      teacherDiscipline: {
        include: {
          teacher: true,
          discipline: {
            include: {
              term: true,
            },
          },
        },
      },
    },
  });
  return results;
}

async function findTestsByTeacher(teacher: string) {
  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        teacher: {
          name: teacher,
        },
      },
    },
    include: {
      category: true,
      teacherDiscipline: {
        include: {
          teacher: true,
          discipline: {
            include: {
              term: true,
            },
          },
        },
      },
    },
  });
  return results;
}

async function findTests() {
  const results = await prisma.tests.findMany({
    include: {
      category: true,
      teacherDiscipline: {
        include: {
          teacher: true,
          discipline: {
            include: {
              term: true,
            },
          },
        },
      },
    },
  });
  return results;
}

export default {
  createTest,
  findTestsByPeriod,
  findTestsByTeacher,
  findTests,
};
