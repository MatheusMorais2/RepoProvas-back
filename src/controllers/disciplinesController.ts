import { Request, Response } from "express";
import disciplinesServices from "../services/disciplinesServices.js";

export async function createDiscipline(req: Request, res: Response) {
  const disciplineName = req.body.name;
  const period = req.body.period;

  await disciplinesServices.createDiscipline(disciplineName, period);

  return res.sendStatus(201);
}

export async function getDisciplines(req: Request, res: Response) {
  const search = await disciplinesServices.getdisciplines();
  return res.status(200).send(search);
}
