import { prisma } from "../database.js";

export interface User {
  id: number;
  email: string;
  password: string;
}

async function findUserByEmail(email: string) {
  const user: User = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  return user;
}

async function createUser(email: string, password: string) {
  await prisma.users.create({
    data: {
      email,
      password,
    },
  });
}

async function createSessions(userId: number) {
  const { id } = await prisma.sessions.create({
    data: {
      userId: userId,
    },
  });
  return id;
}

export default {
  findUserByEmail,
  createUser,
  createSessions,
};
