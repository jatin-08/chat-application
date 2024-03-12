import express, { NextFunction } from "express";
import { isTokenValid, verifyjwt } from "../util/jwt/jwt";

export const authmiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      const token: string = req.headers.authorization.split(' ')[1];
      const decodedToken:any = verifyjwt(token);
      const isExpire = isTokenValid(decodedToken);
      if (isExpire) {
        next();
      } else {
        return res.status(401).json({ message: "Token is Expired!" })
      }
    } else {
      return res.status(401).json({ message: "Token is Required!" })

    }
  } catch (error) { 
    return res.status(500).json({error: error})
  }
};
