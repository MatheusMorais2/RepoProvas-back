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

async function findUserById(id) {
  const user = await prisma.sessions.findFirst({
    where: {
      id: id,
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

async function findSession(sessionId: number) {
  const session = await prisma.sessions.findFirst({
    where: {
      id: sessionId,
    },
  });
  return session;
}

async function deleteSession(sessionId: number) {
  const search = await prisma.sessions.delete({
    where: {
      id: sessionId,
    },
  });
  console.log("search: ", search);
}

export default {
  findUserByEmail: findUserByEmail,
  createUser,
  createSessions,
  findUserById,
  findSession,
  deleteSession,
};
