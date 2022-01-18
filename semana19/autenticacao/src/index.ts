import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import signUp from "./endpoints/signUp"
import { CreateToken } from "./endpoints/createToken"
import { getUserById } from "./endpoints/getUserById"


app.post('/users/signup', createUser)
app.put('/users/:id', editUser)

app.post('/user/signup', signUp)
app.post('/user/login', signUp)

app.get('/user/profile', async (req, res) => {
    try {
        const token = req.headers.authorization as string

        const tokenData = new CreateToken().getData(token)

        if(!tokenData){
            res.statusCode = 401
            throw new Error("Token inválido")
        }

        const user = await getUserById(tokenData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })
    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).end()
        }
        res.end()
    }
})