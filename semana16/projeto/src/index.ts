import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();

app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("User")
    .insert({
        name: name,
        nickname: nickname,
        email: email
    })
}

app.post("/users", async (req,res) => {
    try {
        const {name, nickname, email} = req.body

        if(!name || !nickname || !email){
            throw new Error('Deu erro')
        }
        
        await createUser(name, nickname, email)
        
        res.status(200).send('deu certo')
    } catch (error:any) {
        res.status(400).send({message: "error.message"})
    }
});

const getUser = async (id: number): Promise<any> => {
    const result = await connection.raw(`
        SELECT id, nickname FROM User WHERE id = "${id}"
    `)
    return result[0]
}

app.get("/users/:id", async (req, res) => {
    try {
        const id = Number(req.params.id)
        const userByID = await getUser(id)
        console.log(id, userByID)
        if(userByID.length === 0){
            throw new Error("Id inexistente")
        }
        res.status(200).send(userByID)
    } catch (error:any) {
        res.status(400).send({message: "error.message"})
    }
}) 

const editUser = async (id: number, name: string, nickname: string): Promise<any> => {
    await connection('User')
    .update({
        name: name,
        nickname: nickname,
    }).where("id", id)
}

app.put('/users/edit/:id', async (req,res) => {
    try {
        const id = Number(req.params.id)
        const {name, nickname} = req.body
        
        if(!name || !nickname){
            throw new Error('Campos não podem ficar vazios.')
        }
        
        await editUser(id, name, nickname)

        res.status(200).send("Usuário atualizado")
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const createTask = async (title: string, description: string, limit_date: string, creator_user_id: string): Promise<any> => {
    await connection("Task")
    .insert({
        title: title,
        description: description,
        limit_date: limit_date,
        creator_user_id: creator_user_id
    })
}

app.post('/task', async (req,res) => {
    try {
        const {title, description, limit_date, creator_user_id} = req.body

        if(!title || !description || !limit_date || !creator_user_id){
            throw new Error("Algum campo vazio")
        }
        await createTask(title, description, limit_date, creator_user_id)

        res.status(200).send("Tarefa criada")
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const getTaskById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Task WHERE id = "${id}"
    `)
    return result[0]
}

app.get('/task/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const taskId = await getTaskById(id)

        res.status(200).send(taskId)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})