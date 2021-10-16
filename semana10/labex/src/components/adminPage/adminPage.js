import { useHistory } from "react-router";
import deleteTrip from "../../hooks/deleteTrip";
import useGetTrip from "../../hooks/useHook";
import { useEffect, useState } from "react";

const AdminPage = () => {
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null){
            history.push("/login")
        }
    },[useGetTrip])

    const [list] = useGetTrip()
    
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }  
    
    const detalhesTrip = (prop) => {
        history.push(`/tripDetails/${prop}`)
        localStorage.setItem('id', prop)
    }

    const goToLogin = () => {
        localStorage.clear()
        history.push("/login")
    }

    const goToCreateTrip = () => {
        history.push("/createTrip")
    }

    const renderAdminList = list.map((adminTrip) => {
        return (
            <div>
                <a key={adminTrip.id} onClick={() => detalhesTrip(adminTrip.id)}>{adminTrip.name}</a> 
                <button onClick={() => deleteTrip(adminTrip.id)}>
                    apagar
                </button>
            </div>
        )
    })
    return (
        <div>
            AdminPage
            {renderAdminList}
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToLogin}>Logout</button>
            <button onClick={goToCreateTrip}>CreateTrip</button>
        </div>
    )
}

export default AdminPage; 