import axios from "axios";
import { useEffect } from "react";
import AdminPage from "../components/adminPage/adminPage";

const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-sabino-maryam/trips/${id}`
    const token = localStorage.getItem('token')
    const header = { headers: {
        auth: token
        }
    }

    axios.delete(url, header)
    .then((res) => {
        alert("Sucesso")
        console.log(res.data.success)
    }).catch((err) => {
        console.log(err.response)
    })
}

export default deleteTrip;