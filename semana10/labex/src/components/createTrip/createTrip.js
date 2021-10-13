import { useHistory } from "react-router";

const CreateTrip = () => {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToLogin = () => {
        history.push("/login")
    }

    return (
        <div>
            CreateTrip
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToLogin}>Logout</button>
        </div>
    )
}

export default CreateTrip;