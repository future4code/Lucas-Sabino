import { useHistory } from "react-router";
import deleteTrip from "../../hooks/deleteTrip";
import useGetTrip from "../../hooks/useHook";
import { useEffect, useState } from "react";
import lixeira from "../../img/trash.svg"
import { ContainerAdmin, PaginaAdmin } from "./styled";

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
        history.push("/")
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
            <ContainerAdmin>
                <a key={adminTrip.id} onClick={() => detalhesTrip(adminTrip.id)}>{adminTrip.name}</a> 
                <a onClick={() => deleteTrip(adminTrip.id)}>
                    <img src={lixeira} alt="trash icon"/>
                </a>
            </ContainerAdmin>
        )
    })
    return (
        <PaginaAdmin>
            <h1>Painel Administrativo</h1>
            {renderAdminList}
            <div>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToLogin}>Logout</button>
                <button onClick={goToCreateTrip}>CreateTrip</button>
            </div>
        </PaginaAdmin>
    )
}

export default AdminPage; 