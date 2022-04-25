import teachersRepository from "../repositories/teachersRepository.js";
import { duplicateError } from "../utils/errors.js";

async function createTeacher(teacherName: string) {
  const teacher = await teachersRepository.findTeacherByName(teacherName);
  if (teacher) throw duplicateError("teacher");

  await teachersRepository.createTeacher(teacherName);
}

async function getTeachers() {
  const search = await teachersRepository.getAllTeachers();
  return search;
}

async function createTeacherDiscipline(data) {
  await teachersRepository.createTeacherDiscipline(data);
}

export default { createTeacher, getTeachers, createTeacherDiscipline };
