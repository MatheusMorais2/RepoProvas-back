import { prisma } from "../database.js";

async function createCategory(name) {
  await prisma.categories.create({
    data: {
      name: name,
    },
  });
}

export default { createCategory };
