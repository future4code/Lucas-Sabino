import { connection } from "../data/connection"

export const getUserById = async (id: string): Promise<any> => {
    const result = await connection('usuarios')
        .select('*')
        .where('id', id)

    return result[0]
} 