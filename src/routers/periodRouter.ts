import { Router } from "express";
import {
  createPeriod,
  findAllPeriods,
} from "../controllers/periodController.js";

const periodRouter = Router();

periodRouter.post("/periods", createPeriod);
periodRouter.get("/periods", findAllPeriods);

export default periodRouter;
