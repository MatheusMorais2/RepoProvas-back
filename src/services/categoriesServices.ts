import categoriesRepository from "../repositories/categoriesRepository.js";

async function createCategory(name) {
  await categoriesRepository.createCategory(name);
}

export default { createCategory };
