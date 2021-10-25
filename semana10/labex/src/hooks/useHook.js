import {useEffect, useState} from 'react';
import axios from 'axios'

const useGetTrip = () => {
    const aluno = "lucas-sabino-maryam"
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
    const [list, setList] = useState([])

    useEffect(()=>{
        getList()
    }, [])
    
    const getList = () => {
        axios
        .get(url)
        .then((res) => {
            setList(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    return ([list])
}

export default useGetTrip;
