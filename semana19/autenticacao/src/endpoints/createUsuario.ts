import { connection } from "../data/connection"

const usuarioTableName = "usuarios"

const createUsuario = async (id: string, email: string, password: string) => {
    await connection
    .insert({
        id,
        email,
        password
    })
    .into(usuarioTableName)
}

export default createUsuario