import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerPerfil = styled.div`
    display: grid;
    grid-template-rows: 350px 1fr;
    border: 1px solid black;
    height: 430px;
    width: 300px;
`

const ContainerFoto = styled.img`
    height: 350px;
    width: 100%;
`

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 300px;
    height: 90%;
`

const Botoes = styled.button`
    position: relative;
    box-shadow: 3px 4px 0px 0px #8a2a21;
	background:linear-gradient(to bottom, #cc3325 5%, #f24437 100%);
	background-color:#cc3325;
	border-radius:18px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;

    :hover {
	background:linear-gradient(to bottom, #f24437 5%, #cc3325 100%);
	background-color:#f24437;
}
    :active {
	position:relative;
	top:1px;
}
`

const Perfis = () => {
    const [perfil, setPerfil] = useState([])
    const [escolha, setEscolha] = useState()

    const getPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then((res)=>{
            setPerfil(res.data.profile)
        })
        .catch((err)=>{
            console.log(err.response)
    })
}

    useEffect(() =>{
        getPerfil()
    },[])

    const escolhaUsuario = () =>{
        const body = {
            id: perfil.id,
            choice: escolha
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    return(
        <div>
            <ContainerPerfil>
                <ContainerFoto src={perfil.photo}/>
                <Texto>
                    <h2>{perfil.name}, {perfil.age} </h2>
                    <p>{perfil.bio}</p>
                </Texto>
            </ContainerPerfil>
                <Botoes onClick={()=>{escolhaUsuario(perfil)}} value="false">❌</Botoes>
                <Botoes>❤</Botoes>
        </div>
    )
}
export default Perfis