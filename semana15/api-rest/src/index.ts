import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}
// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/userstype', (req: Request, res: Response) => {
  let errorCode: number = 400;
  try{
    const type: string = req.query.type as string
    const user: User | undefined = users.find((user) => user.type === type)
    if(!user){
      errorCode = 404
      throw new Error('User not found')
    }
    res.status(200).send(user)
  } catch(error) {
    res.status(errorCode).send({message: "error.message"})
  }
})

app.get('/usersname', (req: Request, res: Response) => {
  let errorCode: number = 400;
  try{
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name === name)
    if(!user){
      errorCode = 404
      throw new Error('User not found')
    }
    res.status(200).send(user)
  } catch(error) {
    res.status(errorCode).send({message: "error.message"})
  }
})

app.post('/users', (req, res) => {
  let errorCode: number = 400
  try{
    if(!req.body.name && !req.body.email && !req.body.type && !req.body.age){
      throw new Error('Invalid Parameters')
    }

    const newUser: User = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age
    }

    users.push(newUser)
    res.status(200).send({message: "Success"})
  } catch{
    res.status(errorCode).send("error.message")
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
