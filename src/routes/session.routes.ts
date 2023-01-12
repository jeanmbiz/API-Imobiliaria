import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userLoginSchema } from "../schemas/createUser.schema";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureDataIsValidMiddleware(userLoginSchema),
  createSessionController
);

export default sessionRoutes;
