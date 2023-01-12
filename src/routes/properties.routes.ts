import { Router } from "express";
import {
  createPropertyController,
  listPropertiesController,
} from "../controllers/properties.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIdAdm from "../middlewares/ensureIsAdm.middleware";

const propertiesRoutes = Router();

propertiesRoutes.get("", listPropertiesController);
propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIdAdm,
  createPropertyController
);

export default propertiesRoutes;
