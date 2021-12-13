import * as jwt from "jsonwebtoken";
import { authToken } from "../types";
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "1min"

export const createToken = (id: authToken): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}