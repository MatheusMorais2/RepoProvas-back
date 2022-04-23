import { Request, Response } from "express";
import authService from "../services/authService.js";

interface CreateUser {
  email: string;
  password: string;
  confirmPassword: string;
}

export async function signup(req: Request, res: Response) {
  const userData: CreateUser = req.body;

  await authService.createUser(userData);

  return res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const userData: Omit<CreateUser, "confirmPassword"> = req.body;

  const result = await authService.signin(userData);
  return res.status(200).send(result);
}
