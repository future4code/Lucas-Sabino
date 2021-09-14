import react from "react";
import styled from "styled-components";

const ContainerEtapa3 = styled.div `
    text-align: center;
`
const TituloEtapa3 = styled.h1`
    display: block;
    border-bottom: 1px solid black;
`
const ListaOrdenada = styled.ol`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class Etapa1 extends react.Component{
    render(){
        return(
            <ContainerEtapa3>
                <TituloEtapa3>Etapa 3 - Informações Gerais de Ensino</TituloEtapa3>
                <ListaOrdenada>
                    <li value="5">
                        <h2>Porque você não terminou um curso de graduação?</h2>
                    </li>
                    <input />
                    <li>
                        <h2>Você fez algum curso complementar?</h2>
                    </li>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês </option>
                    </select>
                </ListaOrdenada>
            </ContainerEtapa3>
        )
    }
}