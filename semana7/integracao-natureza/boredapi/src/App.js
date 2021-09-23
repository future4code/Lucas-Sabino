import react from "react"
import axios from "axios"
import styled from "styled-components"
import Filter from "./components/filter"

const ContainerAtividade = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  margin: 10px;
  padding: 10px;
  `

const Botao = styled.button`
  width: 100px;
  align-self: center;
`

export default class App extends react.Component {
  
  state = {
    activity: "",
  }

  getActivity = () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res) => {
      console.log(res.data)
      this.setState({activity: res.data})
    }).catch((err)=>{
      console.log(err.response.data)
    })
  }
  render(){

    const {activity, type, participants, price} = this.state.activity

    return (
      <ContainerAtividade>
        <h1>Are you bored? 🤡</h1>
        <Filter />
        <Botao onClick={this.getActivity}>Clique aqui</Botao>
        <hr />
        <h3>Atividade ✨</h3>
        <p>Nome: {activity}</p>
        <p>Tipo: {type}</p>
        <p>Participantes: {participants}</p>
        <p>Preço: {price}</p>
    </ContainerAtividade>
  );
}
}