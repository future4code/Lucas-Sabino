import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <div>  
            Login
            <form onSubmit={handleLogin}>
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
                <button>Submit</button>
            </form>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default Login;