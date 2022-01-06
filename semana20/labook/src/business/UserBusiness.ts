import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {

    signUp = async (nome: string, email: string, senha: string): Promise<String> => {

        const id: string = new IdGenerator().generate()

        const cypherPassword: string = new HashManager().createHash(senha)

        const newUser: User = {
            id: id,
            name: nome,
            email: email,
            password: cypherPassword
        }

        const createUser = await new UserDatabase().signUp(newUser)
        const token: string = new Authenticator().generateToken({id})

        return token
    }

    login = async (email: string, senha: string): Promise<string | undefined> => {

        const getUserByEmail = await new UserDatabase().findUserByEmail(email)
        const userPassword = getUserByEmail.password
        const userId = getUserByEmail.id

        const passwordIsCorrect: boolean = new HashManager().compareHash(senha, userPassword)

        if (passwordIsCorrect) {
            const token: string = new Authenticator().generateToken({id: userId})
            return token
        }
    }
} 