import styled from "styled-components";

export const ContainerAdmin = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 5px gray;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;

    a{
        :hover{
            background-color: whitesmoke;
        }
    }
`

export const PaginaAdmin = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;

    h1{
        color: #A799B7;
    }

    button{
        background-color: #A799B7;
        color: white;
        width: 90px;
        height: 30px;
        border-radius: 20px;
        align-items: center;
        width: 20%;

        :hover{
            background-color: #916BBF;
        }
    }
`

export default {ContainerAdmin, PaginaAdmin}