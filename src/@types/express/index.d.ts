import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      userDecodedData: {
        id: string;
        idAdm: boolean;
      };
    }
  }
}
