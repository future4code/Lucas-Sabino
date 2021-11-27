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