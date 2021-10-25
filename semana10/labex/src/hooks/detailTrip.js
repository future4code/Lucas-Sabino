import axios from "axios";
import { useEffect, useState } from "react";

const DetailTrip = (id) => {

    useEffect(() => {
        DetailTrip()
    }, [])

    const [detailList, setDetailList] = useState([])

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-sabino-maryam/trip/${id}`
    const token = localStorage.getItem('token')
    const header = { headers: {
        auth: token
        }
    }
    axios.get(url, header)
    .then((res) => {
        console.log(res)
        setDetailList(res.data)
    }).catch((err) => {
        console.log(detailList)
        console.log(err.response)
    })
    return ([detailList])
}

export default DetailTrip;