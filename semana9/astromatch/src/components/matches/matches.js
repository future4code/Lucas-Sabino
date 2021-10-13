import react, { useState, useEffect } from "react";
import axios from "axios";
import {ContainerMatch, ImagemPequena} from "./styled";

const Matches = () => {
    const aluno = "lucas-sabino-maryam"
    const [combinacao, setCombinacao] = useState([])

    useEffect(() => {
        listaMatches()
    },[])
    const listaMatches = () =>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/matches`)
        .then((res)=>{
            setCombinacao(res.data.matches)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    console.log(combinacao)

    const getMatches = combinacao.map((person) =>{
        return(
            <ContainerMatch>
                <ImagemPequena src={person.photo}/>
                <p>{person.name}</p>
            </ContainerMatch>
        )
    })
    return getMatches
}
export default Matches