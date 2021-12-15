import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../entities/User";

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    public generate(input: AuthenticationData): string {
        const token = jwt.sign(
            input,
            process.env.JWT_KEY as jwt.Secret,
            { expiresIn: process.env.TOKEN_EXPIRES }
        )
        return token
    }

    getTokenData(token:string): AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY as jwt.Secret)
        return data as AuthenticationData
    }
}