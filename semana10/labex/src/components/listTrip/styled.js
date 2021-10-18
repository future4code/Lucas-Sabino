import styled from "styled-components"


export const ContainerList = styled.div`
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    padding-left: 5px;
    margin: 5px;
    box-shadow: 4px 5px #A799B7;

    `

export const PaginaLista = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        color: #A799B7;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerBotoes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const Botao = styled.a`
    box-shadow:inset 0px 1px 0px 0px #dcecfb;
	background:linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
	background-color:#bddbfa;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	color:#ffffff;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;
	&:hover {
	background:linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
	background-color:#80b5ea;
}
    &:active {
	    position:relative;
	    top:1px;
}
`

export default {ContainerList, PaginaLista, Title, ContainerBotoes, Botao}