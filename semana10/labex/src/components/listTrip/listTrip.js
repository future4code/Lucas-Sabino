import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListTrip = () => {
    const aluno = "lucas-sabino-maryam"
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:${aluno}/trips`
    const [list, setList] = useState([])

    const getList = () => {

            axios
            .get(url)
            .then((res) => {
                setList(res)
                console.log(res)
                console.log(list)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    useEffect(()=>{
        getList()
    }, [])

    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    const goToAplicationForm = () => {
        history.push("/aplicationForm")
    }

        return (
            <div>
            ListTrip
            <p></p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAplicationForm}>AplicationForm</button>
        </div>
    )
}

export default ListTrip;