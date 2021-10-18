import { useHistory } from 'react-router';
import {ContainerHome, BotaoLista, BotaoLogin} from './styled';
import back from "../../img/background-space.jpg"


const Home = () => {

    const history = useHistory()
    
    const goToLogin = () => {
        history.push("/login")
    }
    
    const goToListTrip = () => {
        history.push("/listTrip")
    }

    return (
        <div>
            <ContainerHome>
                <img src={back} width="100%" height="100%" alt="Background"></img>
                <BotaoLista onClick={goToListTrip}>LISTA DE VIAGENS</BotaoLista>
                <BotaoLogin onClick={goToLogin}>Login</BotaoLogin>
            </ContainerHome>
        </div>
    )
}

export default Home;