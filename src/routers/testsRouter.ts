import { Router } from "express";
import {
  createTest,
  getTestsByPeriod,
  getTestsByTeacher,
  getAllTests,
} from "../controllers/testsController.js";

const testsRouter = Router();

testsRouter.post("/tests", createTest);
testsRouter.get("/tests/period", getTestsByPeriod);
testsRouter.get("/tests/teacher", getTestsByTeacher);
testsRouter.get("/tests", getAllTests);

export default testsRouter;
