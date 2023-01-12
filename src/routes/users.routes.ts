import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureAuthUpdateMiddleware from "../middlewares/ensureAuthUpdate.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIdAdm from "../middlewares/ensureIsAdm.middleware";
import {
  createUserSchema,
  userUpdateSchema,
} from "../schemas/createUser.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);
userRoutes.get("", ensureAuthMiddleware, ensureIdAdm, listUsersController);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userUpdateSchema),
  ensureAuthUpdateMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIdAdm,
  deleteUserController
);

export default userRoutes;
