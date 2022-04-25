import periodRepository from "../repositories/periodRepository.js";
import { duplicateError } from "../utils/errors.js";

async function createPeriod(number: number) {
  const search = await periodRepository.findPeriod(number);
  console.log("search: ", search);
  if (search) throw duplicateError("period");
  await periodRepository.createPeriod(number);
}

async function findAllPeriods() {
  const search = periodRepository.findAllPeriods();
  return search;
}

export default { createPeriod, findAllPeriods };
