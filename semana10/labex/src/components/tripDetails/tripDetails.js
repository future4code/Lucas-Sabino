import { useHistory } from 'react-router'
import { useEffect, useState } from "react";
import axios from "axios";
import AdminPage from '../adminPage/adminPage';

    const TripDetails = () => {
        const history = useHistory()
        
        const tripId = localStorage.getItem('id')
        const [detailList, setDetailList] = useState({})

        useEffect(() => {
            const token = localStorage.getItem('token')
            if(token === null){
                history.push("/login")
            }
        },[TripDetails])

        const getTripDetail = () => {

            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-sabino-maryam/trip/${tripId}`
            const token = localStorage.getItem('token')
            const header = { headers: {
            auth: token
        }
        }
        axios.get(url, header)
        .then((res) => {
            console.log(res.data)
            setDetailList(res.data)
            console.log(detailList)
        }).catch((err) => {
            console.log(err.response)
        })
    }
    useEffect(() => {
        getTripDetail();
    }, [TripDetails]);
    

    return(
        <div>
            TripDetails
        </div>
    )
}

export default TripDetails;