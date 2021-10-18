import { useHistory } from 'react-router'
import { useEffect, useState } from "react";
import axios from "axios";
import AdminPage from '../adminPage/adminPage';

    const TripDetails = () => {
        const history = useHistory()
        const tripId = localStorage.getItem('id')
        const [detailList, setDetailList] = useState([])
        const [candidates, setCandidates] = useState([])
        const [approved, setApproved] = useState([])

        useEffect(() => {
            const token = localStorage.getItem('token')
            if(token === null){
                history.push("/login")
            }
        },[TripDetails])

        //funções axios
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
            setDetailList(res.data.trip)
            setCandidates(res.data.trip.candidates)
            setApproved(res.data.trip.approved)
            console.log(candidates)
        }).catch((err) => {
            console.log(err.response)
        })
    }

        const approveCandidate = (prop) => {
            const id = localStorage.getItem('id')
            const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-sabino-maryam/trips/${id}/candidates/${prop}/decide`
            const token = localStorage.getItem('token')
            const header = { headers: {
                auth: token
                }
            }
            const body = {
                approve: true
            }

            axios.put(url, body, header)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
                console.log(header)
                console.log(token)
                console.log(body)
            })
        }

    useEffect(() => {
        getTripDetail();
    }, [TripDetails]);
    
    //funções map
    const renderCandidates = candidates.map((people) => {
        return (
            <div>
                <a key={people.id}>
                    {people.name}
                    <button onClick={() => approveCandidate(people.id)}>Aprovar</button>
                    <button>Reprovar</button>
                </a>
            </div>
        )
    })

    const renderApproved = approved.map((people) => {
        return (
            <div>
                <a key={people.id}>
                    {people.name}
                </a>
            </div>
        )
    })

    return(
        <div>
            {detailList ? 
            <div>
                <p>Nome: {detailList.name}</p>
                <p>Descrição: {detailList.description}</p>
                <p>Planeta: {detailList.planet}</p>
                <p>Duração: {detailList.durationInDays}</p>
                <p>Data: {detailList.date}</p>
                <div>
                    {renderCandidates}
                </div>
                <div>
                    {renderApproved}
                </div>
            </div> : 
            <p>Nada </p>}
            TripDetails
        </div>
    )
}

export default TripDetails;