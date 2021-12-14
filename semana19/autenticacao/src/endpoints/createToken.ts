import * as jwt from "jsonwebtoken";
import { authToken } from "../types";
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "1min"

export class CreateToken {
  generateToken = (payload: authToken) => {
    const token = jwt.sign(
      {
        payload,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
      );
      return token;
    }

    getData = (token: string): authToken => {
      const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
      const result = {
        id: payload.id,
      };
      return result;
    };
  }