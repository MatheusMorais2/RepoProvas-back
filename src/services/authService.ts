import authRepository from "../repositories/authRepository.js";
import {
  badRequest,
  duplicateError,
  notFoundError,
  unauthorized,
} from "../utils/errors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface CreateUser {
  email: string;
  password: string;
  confirmPassword: string;
}

async function createUser(userData: CreateUser) {
  const user = await authRepository.findUserByEmail(userData.email);
  if (user) throw duplicateError("user");

  if (userData.password !== userData.confirmPassword)
    throw badRequest("confirm password");

  userData.password = bcrypt.hashSync(userData.password, 10);

  await authRepository.createUser(userData.email, userData.password);
}

async function signin(userData: Omit<CreateUser, "confirmPassword">) {
  const user = await authRepository.findUserByEmail(userData.email);
  if (!user) throw notFoundError("user");

  const passwordVerification = bcrypt.compareSync(
    userData.password,
    user.password
  );
  if (!passwordVerification) throw unauthorized("password");

  const sessionId = await authRepository.createSessions(user.id);

  const privateKey = process.env.JWT_SECRET;
  const config = { expiresIn: 3600 * 5 };
  const data = { userId: user.id, sessionId };
  const token = jwt.sign(data, privateKey, config);
  return token;
}

export default {
  createUser,
  signin,
};
