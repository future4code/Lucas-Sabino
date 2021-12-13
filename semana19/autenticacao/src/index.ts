import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { user } from "./types"
import { generateId } from "./generateID"
import createUsuario from "./endpoints/createUsuario"
import { createToken } from "./endpoints/createToken"

app.post('/users/signup', createUser)
app.put('/users/:id', editUser)

app.post('/user/signup', async (req, res) => {
    try {
        const {email, password} = req.body
        
        if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha todos os campos")
        }

        const userData = {email, password}

        const id = generateId()

        await createUsuario(id, email, password)
        const token = createToken({id})
        res.status(200).send({token})
    } catch (error:any) {
        res.status(400).send({ message: error.message})
    }
})