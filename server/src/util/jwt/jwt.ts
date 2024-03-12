import jwt from "jsonwebtoken";
import { jwtExp, secretKey } from "../../config";

export const createjwt = (body: any) => {
  return jwt.sign(body, secretKey, { expiresIn: jwtExp });
};

export const verifyjwt = (token: string) => {
  return jwt.verify(token, secretKey, { ignoreExpiration: true });
};

export const isTokenValid = (token: { exp?: number }): boolean => {
  const currentTimeInMillisecond: number = Math.floor(Date.now() / 1000);
  if (token.exp !== undefined && typeof token.exp === 'number' && token.exp > currentTimeInMillisecond) {
    return true;
  } else {
    return false;
  }
};
