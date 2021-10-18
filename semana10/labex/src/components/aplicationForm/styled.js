import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;

    h1{
        color: #A799B7;
    }
    `

export const Form = styled.form`
    display: flex;
    left: 5px;
    flex-direction: column; 
    padding: 40px;
    left: 7%;
    top: 32%;
    gap: 15px;
    border-radius: 20px;
    width: 30%;
    position: fixed;
    
    input{
        height: 25px;
        border-radius: 20px;
        padding-left: 10px;
        padding-right: 5px;
    }
    
    select{
        height: 30px;
        border-radius: 20px;
        padding-left: 10px;
    }

    button{
        display: flex;
        justify-content: space-evenly;
    }
`

export const BotoesForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    
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
`

export const BackgroundImgForm = styled.img`
    position: absolute;
    left: 5px;
    border-radius: 20px;
    width: 50%;
    opacity: 0.7;
`


export default {ContainerForm, Form, BackgroundImgForm, BotoesForm}