import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const ensureIdAdm = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = AppDataSource.getRepository(User);

  const userLoged = await userRepository.findOneBy({
    id: req.userDecodedData.id,
  });

  if (!userLoged.isAdm) {
    throw new AppError("missing admin permission", 403);
  }

  next();
};

export default ensureIdAdm;
