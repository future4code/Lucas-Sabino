import { useHistory } from 'react-router';
import {ContainerHome} from './styled';
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
                <img src={back} width="100%" height="100%"></img>
                <button onClick={goToListTrip}>ListTrip</button>
                <button onClick={goToLogin}>Login</button>
            </ContainerHome>
        </div>
    )
}

export default Home;