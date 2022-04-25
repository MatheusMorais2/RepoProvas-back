import { prisma } from "../database.js";

async function createTeacher(teacherName: string) {
  await prisma.teachers.create({
    data: {
      name: teacherName,
    },
  });
}

async function createTeacherDiscipline(data) {
  await prisma.teachersDisciplines.create({
    data: {
      teacherId: data.teacherId,
      disciplineId: data.disciplineId,
    },
  });
}

async function getAllTeachers() {
  const search = await prisma.teachers.findMany();
  return search;
}

async function findTeacherByName(teacherName: string) {
  const search = await prisma.teachers.findFirst({
    where: {
      name: teacherName,
    },
  });
  return search;
}

export default {
  createTeacher,
  getAllTeachers,
  findTeacherByName,
  createTeacherDiscipline,
};
