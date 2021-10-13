import { useHistory } from "react-router";

const AdminPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToCreateTrip = () => {
        history.push("/createTrip")
    }

    return (
        <div>
            AdminPage
            <button onClick={goBack}>Voltar</button>
            <button onClick={goBack}>Logout</button>
            <button onClick={goToCreateTrip}>CreateTrip</button>
        </div>
    )
}

export default AdminPage; 