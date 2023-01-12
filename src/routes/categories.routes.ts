import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listPropertiesByCategoryController,
} from "../controllers/categories.controllers";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIdAdm from "../middlewares/ensureIsAdm.middleware";
import { createCategorySchema } from "../schemas/createCategory.schema";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIdAdm,
  ensureDataIsValidMiddleware(createCategorySchema),
  createCategoryController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listPropertiesByCategoryController);

export default categoriesRoutes;
