import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const ensureAuthUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.userDecodedData.idAdm || req.userDecodedData.id === req.params.id) {
    throw new AppError("Tou don't have permission", 403);
  }
  next();
};

export default ensureAuthUpdateMiddleware;
