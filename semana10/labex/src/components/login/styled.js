import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    img{
        width: 100%;
        opacity: 0.7;
    }

    form{
        align-items: flex-start;
    }

`

export const FormLogin = styled.form`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 5px black;
    padding: 70px;
    padding-bottom: 60px;
    position: absolute;
    top: 28%;
    flex-direction: column;
    gap: 10px;

    input{
        border-radius: 20px;
        padding-left: 5px;
        height: 25px;
        width: 250px;
    }

    button{
        background-color: #A799B7;
        color: white;
        width: 90px;
        height: 30px;
        border-radius: 20px;
        margin-top: 10px;
        margin-left: 30px;

        :hover{
            background-color: #916BBF;
        }
    }
`

export default {ContainerLogin, FormLogin}