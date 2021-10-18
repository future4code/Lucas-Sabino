import { useHistory } from "react-router-dom";
import useGetTrip from "../../hooks/useHook";
import { Botao, ContainerBotoes, ContainerList, PaginaLista, Title } from "./styled";
import rocket from "../../img/rocket-icon.png"

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
            <ContainerList key={trip.id} value={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
            </ContainerList>
        )
    })
    
    return (
        list.length === null ?  <p> Não há viagens </p> : 
        <PaginaLista>
            <Title>
                <img src={rocket} width="8%" height="8%"/>
                <h1>Lista de viagens</h1>
            </Title>
            <ContainerBotoes>
                <Botao onClick={goToAplicationForm}>Inscrever-se</Botao>
                <Botao onClick={goBack}>Voltar</Botao>
            </ContainerBotoes>
            {renderListTrip}
        </PaginaLista>
    )
}

export default ListTrip;