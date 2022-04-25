import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import testsService from "../services/testsService.js";
import verifyToken from "../utils/verifyToken.js";

export interface Test {
  id: string;
  name: string;
  pdfUrl: string;
  category: string;
  discipline: string;
  period: number;
  type: string;
}

export async function createTest(req: Request, res: Response) {
  /*   const token: string = req.headers.authorization;
  

  const tokenData = await verifyToken(token);
  const userId = tokenData["userId"]; */
  const testData = req.body;
  console.log("testData: ", testData);
  await testsService.createTest(testData);

  return res.sendStatus(201);
}

export async function getTestsByPeriod(req: Request, res: Response) {
  const period: number = req.body.period;
  const search = await testsService.findTestsByPeriod(period);
  return res.status(200).send(search);
}

export async function getTestsByTeacher(req: Request, res: Response) {
  const teacher: string = req.body.teacher;

  const search = await testsService.findTestsByTeacher(teacher);
  return res.status(200).send(search);
}

export async function getAllTests(req: Request, res: Response) {
  const token: any = req.headers.authorization;
  await verifyToken(token);

  const search = await testsService.findTests();
  return res.status(200).send(search);
}
