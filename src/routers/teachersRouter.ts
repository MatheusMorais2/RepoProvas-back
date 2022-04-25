import { Router } from "express";
import {
  createTeacher,
  getTeachers,
  createTeacherDiscipline,
} from "../controllers/teachersController.js";

const teachersRouter = Router();

teachersRouter.post("/teachers", createTeacher);
teachersRouter.get("/teachers", getTeachers);
teachersRouter.post("/teachers/discipline", createTeacherDiscipline);

export default teachersRouter;
