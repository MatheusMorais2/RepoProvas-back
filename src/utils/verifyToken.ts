import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";
import { unauthorized } from "./errors.js";

export default async function verifyToken(token: string) {
  try {
    const privateKey = process.env.JWT_SECRET;
    const tokenData = jwt.verify(token, privateKey);

    const userId = tokenData["userId"];
    const sessionId = tokenData["sessionId"];

    const search = await authRepository.findSession(sessionId);
    if (userId !== search.userId) throw unauthorized("token");
    return tokenData;
  } catch {
    console.log("token adulterado");
  }
}
