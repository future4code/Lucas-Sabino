import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getAllUsers(req: Request, res: Response) {
    try {
        const token = req.headers.authorization

        if (!token) {
            res
                .status(422)
                .send("Faltando token")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token as string)

        if(tokenData.role !== 'ADMIN'){
            res.status(401).send("Não autorizado")
        }

        const userDatabase = new UserDatabase
        const users = await userDatabase.getAllUsers()

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}