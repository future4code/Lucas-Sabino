import styled from "styled-components";

export const ContainerCreateTrip = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 5px gray;
    text-align: center;
    padding-bottom: 20px;

    button{
        background-color: #A799B7;
        color: white;
        width: 90px;
        height: 30px;
        border-radius: 20px;
        align-items: center;

        :hover{
            background-color: #916BBF;
        }
    }

    h1{
        color: #A799B7;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        select{
            width: 51%;
        }

        input{
            width: 50%;
        }
    }
`

export const BotoesCreate = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    /* margin-bottom: 10px; */
`

export default {ContainerCreateTrip, BotoesCreate};