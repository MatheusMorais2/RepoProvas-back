import { Request, Response } from "express";
import categoriesServices from "../services/categoriesServices.js";

export async function createCategory(req: Request, res: Response) {
  const name = req.body.name;
  await categoriesServices.createCategory(name);
  return res.sendStatus(201);
}
