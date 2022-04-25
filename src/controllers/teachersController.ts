import { Request, Response } from "express";
import teachersServices from "../services/teachersServices.js";

export async function createTeacher(req: Request, res: Response) {
  const teacherName = req.body.name;

  await teachersServices.createTeacher(teacherName);

  return res.sendStatus(201);
}

export async function getTeachers(req: Request, res: Response) {
  const search = await teachersServices.getTeachers();
  return res.status(200).send(search);
}

export async function createTeacherDiscipline(req: Request, res: Response) {
  const data = req.body;
  await teachersServices.createTeacherDiscipline(data);
  return res.sendStatus(201);
}
