import { useHistory } from "react-router";

const AplicationForm = () => {

    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            AplicationForm
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default AplicationForm;