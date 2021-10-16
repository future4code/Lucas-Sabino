import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CreateTrip = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null){
            history.push("/login")
        }
    },[])

    const [form, setForm] = useState({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const newTrip = (ev) => {
        ev.preventDefault()
        const token = localStorage.getItem('token')
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-sabino-maryam/trips`
        const header = { headers: {
            auth: token
            }
        }

        axios.post(url, form, header)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(url, token, form)
                console.log(err.response)
            })
    }
    
    const history = useHistory()

    const formulario = (ev) => {
        const {name, value} = ev.target
        setForm({...form, [name]: value })
    }

    const goBack = () => {
        history.goBack()
    }

    const goToLogin = () => {
        history.push("/login")
    }

    return (
        <div>
            CreateTrip
            <form onSubmit={newTrip}>
                <input 
                    value={form.name} 
                    name="name" 
                    placeholder="Nome"
                    pattern="[a-z]{5,}"
                    required
                    onChange={formulario}
                    />
                <select value={form.planet} name="planet" onChange={formulario} required>
                    <option defaultValue>Planeta</option>
                    <option value="mercurio">Mercurio</option>
                    <option value="venus">Venus</option>
                    <option value="terra">Terra</option>
                    <option value="marte">Marte</option>
                    <option value="jupiter">Júpiter</option>
                    <option value="saturno">Saturno</option>
                    <option value="urano">Urano</option>
                    <option value="netuno">Netuno</option>
                    <option value="plutao">Plutão</option>
                </select>
                <input name="date" placeholder="Data" onChange={formulario} type="date" required/>
                <input name="description" onChange={formulario} placeholder="Descrição" required/> 
                <input name="durationInDays" onChange={formulario} placeholder="Duração em dias" type="number" required/>
                <button>Criar</button>
            </form>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToLogin}>Logout</button>
        </div>
    )
}

export default CreateTrip;