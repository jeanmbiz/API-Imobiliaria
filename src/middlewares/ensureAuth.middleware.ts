import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Missin authorization token" });
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.userDecodedData = {
      id: decoded.sub,
      idAdm: decoded.isAdm,
    };

    return next();
  });
};

export default ensureAuthMiddleware;
