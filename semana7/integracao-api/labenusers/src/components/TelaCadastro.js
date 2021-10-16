import axios from "axios";
import React from "react";

export default class TelaCadastro extends React.Component{
    state ={
        name: "",
        email: ""
    }

    handleName =(event) => {
        this.setState({name: event.target.value})
    }

    handleEmail =(event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(url, body, {
            headers:{
                Authorization: "lucas-sabino-maryam"
            }
        })
        .then((res) => {
            alert("Usuário(a) cadastrado(a) com sucesso")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista</button>
                <h1>Cadastro</h1>
                <input 
                    placeholder={"Nome"}
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <input 
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}