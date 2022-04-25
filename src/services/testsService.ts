import { Test } from "../repositories/testsRepository.js";
import authRepository from "../repositories/authRepository.js";
import testsRepository from "../repositories/testsRepository.js";
import {
  badRequest,
  duplicateError,
  notFoundError,
  unauthorized,
} from "../utils/errors.js";

async function createTest(testData: Omit<Test, "id">) {
  /*   const user = await authRepository.findUserById(userId);
  if (!user) throw notFoundError("user"); */
  console.log("chegou no service");
  await testsRepository.createTest(testData);
}

async function findTestsByPeriod(period: number) {
  const search = await testsRepository.findTestsByPeriod(period);
  if (!search) throw notFoundError("tests");

  return search;
}

async function findTestsByTeacher(teacher: string) {
  const search = await testsRepository.findTestsByTeacher(teacher);
  if (!search) throw notFoundError("tests");

  return search;
}

async function findTests() {
  const search = await testsRepository.findTests();
  return search;
}

export default { createTest, findTestsByPeriod, findTestsByTeacher, findTests };
