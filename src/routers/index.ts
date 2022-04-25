import { Router } from "express";
import authRouter from "./authRouter.js";
import testsRouter from "./testsRouter.js";
import periodRouter from "./periodRouter.js";
import teachersRouter from "./teachersRouter.js";
import disciplinesRouter from "./disciplinesRouter.js";
import categoriesRouter from "./categoriesRouter.js";

const router = Router();
router.use(authRouter);
router.use(testsRouter);
router.use(periodRouter);
router.use(teachersRouter);
router.use(disciplinesRouter);
router.use(categoriesRouter);

export default router;
