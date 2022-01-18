import { Request, Response } from "express"
import { generateId } from "../generateID"
import createUsuario from "../endpoints/createUsuario"
import { CreateToken } from "../endpoints/createToken"

export default async function signUp(
    req: Request, 
    res: Response): Promise<void> {
    try {
        const {email, password} = req.body
        
        if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha todos os campos")
        }

        if(!email || email.indexOf("@") === -1){
            throw new Error("Email invalido")
        }

        if(!password || password.length < 6){
            throw new Error("Senha inválida")
        }
        
        const userData = {email, password}

        const id = generateId()

        await createUsuario(id, email, password)

        const token: string = new CreateToken().generateToken({id})

        res.status(201).send({token: token})
    } catch (error:any) {
        res.status(400).send({ message: error.message})
    }
}