import { Response, Request } from "express";
import periodService from "../services/periodService.js";

export async function createPeriod(req: Request, res: Response) {
  const number: number = req.body.number;
  await periodService.createPeriod(number);
  return res.sendStatus(201);
}

export async function findAllPeriods(req: Request, res: Response) {
  const results = await periodService.findAllPeriods();
  return res.status(200).send(results);
}
