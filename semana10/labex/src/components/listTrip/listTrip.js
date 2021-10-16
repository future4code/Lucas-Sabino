import { useHistory } from "react-router-dom";
import useGetTrip from "../../hooks/useHook";
import AplicationForm from "../aplicationForm/aplicationForm";

export const ListTrip = () => {    
    const [list] = useGetTrip()

    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    const goToAplicationForm = (id) => {
        history.push(`/aplicationForm/${id}`)
    }

    const renderListTrip = list.map((trip) => {
        return (
            <a key={trip.id} value={trip.id} onClick={() => AplicationForm(trip.id)}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
            </a>
        )
    })
    
    return (
        list.length === null ?  <p> Não há viagens </p> : 
        <div>
            {renderListTrip}
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAplicationForm}>AplicationForm</button>
        </div>
    )
}

export default ListTrip;