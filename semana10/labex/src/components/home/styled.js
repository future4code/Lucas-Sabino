import styled from "styled-components"

export const ContainerHome = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 50%;
    align-content: center;
`
export const BotaoLista = styled.button`
    position: absolute;
    left: 20%;
    top: 25%;
    width: 8%;
    height: 8%;
    border-radius: 6px;

    :hover {
        color: white;
        background-color: #A799D9;
    }
`

export const BotaoLogin = styled.button`
    position: absolute;
    left: 43%;
    border-radius: 5px;
    width: 7%;
    height: 4%;

    :hover {
        color: white;
        background-color: #A799D9;
    }
`


export default {ContainerHome, BotaoLista, BotaoLogin};