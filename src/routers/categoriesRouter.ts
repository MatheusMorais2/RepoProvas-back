import { Router } from "express";
import { createCategory } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.post("/categories", createCategory);

export default categoriesRouter;
