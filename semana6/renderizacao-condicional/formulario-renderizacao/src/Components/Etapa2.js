import react from "react";
import styled from "styled-components";

const ContainerEtapa2 = styled.div `
    text-align: center;
`
const TituloEtapa2 = styled.h1`
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
            <ContainerEtapa2>
                <TituloEtapa2>Etapa 2 - Informações do Ensino Superior</TituloEtapa2>
                <ListaOrdenada>
                    <li value="5">
                        <h2>Qual curso?</h2>
                    </li>
                    <input placeholder="Digite aqui o nome do curso"></input>
                    <li>
                        <h2>Qual unidade de ensino?</h2>
                    </li>
                    <input placeholder="Unidade de ensino"></input>
                </ListaOrdenada>
            </ContainerEtapa2>
        )
    }
}