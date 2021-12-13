# Exercício 1

### a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
> O uso de strings faz com que o ID se torne mais robusto.

### b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
```sh
import { v4 } from "uuid"

const id = v4();
```

# Exercício 2

### a. Explique o código acima com as suas palavras.
> o código cria uma conexão com o banco de dados, depois insere um novo usuário com id, password e email na tabela userTableName(que é uma extenção de User).

### b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
```
CREATE TABLE usuarios(  
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### c. Pela mesma justificativa do exercício anterior, crie uma função responsável por salvar usuários no banco.
```
import { connection } from "../data/connection"

const usuarioTableName = "usuario"

const createUsuario = async (id: string, email: string, password: string) => {
    await connection
    .insert({
        id,
        email,
        password
    })
    .into(usuarioTableName)
}
```

# Exercício 3

### a. O que a linha as string faz? Por que precisamos usar ela ali?
> Transforma a informação que vem do .env em string pois trata-se da chave secreta de criptografia.

### b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
```sh
import {sign} from "jsonwebtoken"
import dotenv from 'dotenv'
import { token } from '../types'

dotenv.config()

export class createToken{
    generateToken = (
        payload: token
    ) => {
        const token = sign(
            payload,
            process.env.JWT_SECRET as string
        )
        return token
    }
}
```

# Exercício 4 

### 