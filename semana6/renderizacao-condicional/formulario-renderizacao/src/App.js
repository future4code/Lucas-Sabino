import styled from 'styled-components';
import React from 'react';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';

const ContainerHome = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;

  button{
    margin-top: 2%;
  }
`

export default class App extends React.Component {
  state= {
    etapa: 1
  }
  renderizaEtapa = () =>{
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />
      default:
        return <h1>null</h1>
    }
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render(){
      return (
        <ContainerHome>
          {this.renderizaEtapa()}
          {this.state.etapa === 4 ? <p /> : <button onClick={this.proximaEtapa}>Próxima etapa</button> }
        </ContainerHome>
    );
    
  }
}
