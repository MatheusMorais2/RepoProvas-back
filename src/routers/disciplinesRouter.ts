import { Router } from "express";
import {
  createDiscipline,
  getDisciplines,
} from "../controllers/disciplinesController.js";

const disciplinesRouter = Router();

disciplinesRouter.post("/disciplines", createDiscipline);
disciplinesRouter.get("/disciplines", getDisciplines);

export default disciplinesRouter;
