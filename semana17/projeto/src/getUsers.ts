import { Request, Response } from "express";
import { connection } from "./connection";
import { User } from "./types";

export const getUsers = async (req: Request, res: Response) => {
    try {
 
       const users: User[] = await connection("labecommerce_users")
 
       res.status(200).send(users)
       
    } catch (error:any) {
       res.status(400).send({message: error.message})
    }
 }