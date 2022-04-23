import authRepository from "../repositories/authRepository.js";
import { badRequest, duplicateError, notFoundError } from "../utils/errors.js";

async function verifyUser(email: string) {
  const user = await authRepository.findUserByEmail(email);
  if (!user) throw notFoundError("user");
}

export default {
  verifyUser,
};
