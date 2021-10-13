import { useHistory } from "react-router";

const Login = () => {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToAdminPage = () => {
        history.push("/adminPage")
    }
    return (
        <div>  
            Login
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdminPage}>Entrar</button>
        </div>
    )
}

export default Login;