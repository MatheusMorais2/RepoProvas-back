import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import { signup, signin } from "../controllers/authController.js";
import signupSchema from "../schemas/signupSchema.js";
import signinSchema from "../schemas/signinSchema.js";

const authRouter = Router();

authRouter.post(
  "/auth/signup",
  schemaValidationMiddleware(signupSchema),
  signup
);
authRouter.post(
  "/auth/signin",
  schemaValidationMiddleware(signinSchema),
  signin
);

export default authRouter;
