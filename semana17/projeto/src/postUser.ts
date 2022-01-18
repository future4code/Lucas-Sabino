import { Request, Response } from "express";
import { connection } from "./connection";
import { User } from "./types";

export const postUser = async (req: Request, res: Response) => {
    try {
       const {name, email, password} = req.body
 
       if(!name || !email || !password){
          throw new Error("Parâmetros faltando")
       }
 
       const user: User = {
          id: Date.now().toString(),
          name,
          email,
          password
       }
 
       await connection("labecommerce_users")
       .insert(user)
 
       res.status(200).send({message: "Usuário criado"})
       
    } catch (error:any) {
       res.status(400).send({message: error.message})
    }
 }