import disciplinesRepository from "../repositories/disciplinesRepository.js";
import periodRepository from "../repositories/periodRepository.js";
import { duplicateError, notFoundError } from "../utils/errors.js";

async function createDiscipline(disciplineName: string, period: number) {
  const discipline = await disciplinesRepository.findDisciplineByName(
    disciplineName
  );
  if (discipline) throw duplicateError("Discipline");

  const periodSearch = await periodRepository.findPeriod(period);
  if (!periodSearch) throw notFoundError("period");

  await disciplinesRepository.createDiscipline(disciplineName, periodSearch.id);
}

async function getdisciplines() {
  const search = await disciplinesRepository.getAllDisciplines();
  return search;
}

export default { createDiscipline, getdisciplines };
