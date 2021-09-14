import react from "react";
import styled from "styled-components";

const ContainerEtapa1 = styled.div `
    text-align: center;
`
const TituloEtapa1 = styled.h1`
    display: block;
    border-bottom: 1px solid black;
`
const ListaOrdenada = styled.ol`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class Etapa1 extends react.Component{
    
    clicou = () =>{
        const valorEtapa = this.form.select.value
        console.log(valorEtapa)
    }
    render(){
        return(
            <ContainerEtapa1>
                <TituloEtapa1>Etapa 1 - Dados Gerais</TituloEtapa1>
                <ListaOrdenada>
                    <li>
                        <h2>Qual o seu nome?</h2>
                    </li>
                    <input placeholder="Digite aqui o seu nome"></input>
                    <li>
                        <h2>Qual a sua idade?</h2>
                    </li>
                    <input placeholder="Digite aqui a sua idade"></input>
                    <li>
                        <h2>Qual o seu E-mail?</h2>
                    </li>
                    <input placeholder="Digite aqui o seu E-mail"></input>
                    <li>
                        <h2>Qual a sua escolaridade?</h2>
                    </li>
                    <select >
                        <option value="3">Ensino médio incompleto</option>
                        <option value="3">Ensino médio completo</option>
                        <option value="2">Ensino superior incompleto</option>
                        <option value="2">Ensino superior completo</option>
                    </select>
                </ListaOrdenada>
            </ContainerEtapa1>
        )
    }
}