import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardUsuario = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component {
    state = {
        usuario: []
    }
    
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url,{
            headers: {
                Authorization: "lucas-sabino-maryam"
            }
        })
        .then((res)=>{
            this.setState({usuario: res.data})
        })
        .catch((err)=>{
            alert("Deu erro visse")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,{
            headers:{
                Authorization: "lucas-sabino-maryam"
            }
        })
        .then((res)=>{
            alert("Deletasse")
            this.pegarUsuarios()
        })
        .catch((err)=>{
            alert("Deu erro, menine")
        })
    }
    render(){
        const listaUsuarios = this.state.usuario.map((user) => {
            return (<CardUsuario key={user.id}>
                        {user.name}
                        <button onClick={()=> this.deletarUsuario(user.id)}>X</button>
                    </CardUsuario>
                    )
        })
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h1>Lista de Usuários</h1>
                {listaUsuarios}
            </div>
        )
    }
}