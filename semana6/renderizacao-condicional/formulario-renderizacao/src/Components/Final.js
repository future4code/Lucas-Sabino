import react from "react";
import styled from "styled-components";

const ContainerFinal = styled.div `
    text-align: center;
`
const TituloFinal = styled.h1`
    display: block;
    border-bottom: 1px solid black;
`

export default class Etapa1 extends react.Component{
    render(){
        return(
            <ContainerFinal>
                <TituloFinal>O Formulário Acabou</TituloFinal>
                <h2>Muito obrigado por participar! Entraremos em contato!</h2>
            </ContainerFinal>
        )
    }
}