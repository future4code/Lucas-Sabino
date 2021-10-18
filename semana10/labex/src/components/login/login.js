import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import backgroundForm from "../../img/background-spaceman.jpg"
import { ContainerLogin, FormLogin } from "./styled";

const Login = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token !== null){
            history.push("/adminPage")
        }
    },[])

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const aluno = "lucas-sabino-maryam"
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`
    
    const history = useHistory()

    const handleLogin = (ev) => {
        ev.preventDefault()
        axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/adminPage")
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    const setLogin = (ev) => {
        const { name, value } = ev.target
        setForm({...form, [name]: value})
    }
    
    const goBack = () => {
        history.goBack()
    }

    return (
        <ContainerLogin>  
            <img src={backgroundForm} alt="background"/>
            <FormLogin onSubmit={handleLogin}>
                <input 
                    name="email" 
                    type="email" 
                    onChange={setLogin}
                    value={form.email} 
                    placeholder="E-mail"
                    required 
                />
                <input 
                    name="password" 
                    type="password" 
                    onChange={setLogin} 
                    value={form.password} 
                    placeholder="Senha" 
                    required 
                />
                <div>
                    <button>Entrar</button>
                    <button onClick={goBack}>Voltar</button>
                </div>
            </FormLogin>
        </ContainerLogin>
    )
}

export default Login;