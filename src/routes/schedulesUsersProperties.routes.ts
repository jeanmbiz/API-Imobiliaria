import { Router } from "express";
import {
  createScheduleController,
  listCheduleByPropertiesController,
} from "../controllers/schedulesUsersProperties.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIdAdm from "../middlewares/ensureIsAdm.middleware";

const schedulesUsersPropertiesRoutes = Router();

schedulesUsersPropertiesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIdAdm,
  listCheduleByPropertiesController
);

schedulesUsersPropertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  createScheduleController
);

export default schedulesUsersPropertiesRoutes;
