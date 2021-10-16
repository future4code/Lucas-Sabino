import React, {useState, useEffect} from "react";
import axios from "axios";
import like from "../img/like.svg"
import dislike from "../img/dislike.svg"
import {ContainerPerfil, ContainerFoto, Texto, BotaoVermelho, BotaoVerde, Bio, NomeEIdade, Botoes} from "./styled"

const Perfis = () => {
    const [perfil, setPerfil] = useState([])
    const aluno = "lucas-sabino-maryam"

    const getPerfil = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)
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

    const escolhaUsuario = (props) =>{
        const body = {
            id: perfil.id,
            choice: props
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/choose-person`, body)
        .then((res)=>{
            getPerfil()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    const escolhaFalse = () => {
        escolhaUsuario(false)
    }

    const escolhaTrue = () => {
        escolhaUsuario(true)
    }

    const limparTudo = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/clear`)
        .then((res) => {
            console.log(res)
            getPerfil()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    } 

    return(
        <div>
            {perfil ? 
            <div>
                <ContainerPerfil>
                    <ContainerFoto src={perfil.photo}/>
                    <Texto>
                        <NomeEIdade>{perfil.name}, {perfil.age} </NomeEIdade>
                        <Bio>{perfil.bio}</Bio>
                    </Texto>
                </ContainerPerfil>
                <Botoes>
                    <BotaoVermelho onClick={escolhaFalse}><img src={dislike}/></BotaoVermelho>
                    <BotaoVerde onClick={escolhaTrue}><img src={like}/></BotaoVerde>
                </Botoes>
            </div>
            :
            <div>
                <hr/>
                <span>VIXE, acabou a galera por aqui. Tenta limpar e começar novamente! 💕</span>
                <br/>
                <br/>
                <br/>
                <button onClick={limparTudo}>LIMPAR</button>
            </div>
            }
        </div>
            )
        }
        export default Perfis