import styled from "styled-components"

export const ContainerPerfil = styled.div`
    display: grid;
    grid-template-rows: 350px 1fr;
    border: 1px solid black;
    height: 430px;
    width: 300px;
    box-shadow: 0px 5px 12px black;
    margin: 2px 15px 15px;
`

export const ContainerFoto = styled.img`
    height: 350px;
    width: 100%;
`

export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 330px;
    margin-left: 3px;
    height: 90%;
    width: 300px;
`

export const Bio = styled.p`
    margin: 0;
`

export const NomeEIdade = styled.h2`
    margin-bottom: 10px;
`

export const BotaoVermelho =styled.button`
    position: relative;
    box-shadow: 0px 10px 14px -7px;
    border: 2px solid red;
    background-color: transparent;
	border-radius:29px;
	display:inline-block;
    color: red;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:16px 17px;
	text-shadow:0px 1px 0px #2f6627;

    :hover {
	background:linear-gradient(to bottom, #FFAAA7 5%, red 100%);
	background-color: red;
    color: white;
}
    :active {
	position:relative;
	top:1px;
}
`

export const BotaoVerde = styled.button`
    position: relative;
    box-shadow: 0px 10px 14px -7px;
    border: 2px solid green;
    background-color: transparent;
	border-radius:29px;
	display:inline-block;
    color: green;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:16px 17px;
	text-shadow:0px 1px 0px #2f6627;

    :hover {
	background:linear-gradient(to bottom, #4ebd13 5%, #3bf56c 100%);
	background-color:#4ebd13;
    color: white;
}
    :active {
	position:relative;
	top:1px;
}
`

export const Botoes = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-evenly;
`

export default {ContainerPerfil, ContainerFoto, Texto, BotaoVermelho, BotaoVerde, Bio, NomeEIdade, Botoes}