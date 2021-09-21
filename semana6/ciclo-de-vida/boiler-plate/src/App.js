import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: 1, 
        texto: 'Tarefa de casa',
        completa: false
      },
      {
        id: 2,
        texto: 'Tarefa Labenu',
        completa: true
      }],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const textoTarefas = this.state.tarefas;
    const tarefaString = JSON.stringify(textoTarefas);
    window.localStorage.setItem("textoTarefas", tarefaString)
  };

  componentDidMount() {
    const tarefaStrings = window.localStorage.getItem("textoTarefas");

    if(tarefaStrings) {
      const textoTarefas = JSON.parse(tarefaStrings);
      this.setState({ tarefas: textoTarefas });
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaLista = [novaTarefa, ...this.state.tarefas]
    this.setState({tarefas: novaLista})
  }

  selectTarefa = (id) => {
    const alteraTarefa = this.state.tarefas.map((tarefinha)=>{
      if(id === tarefinha.id){
        const novoEstado ={
          ...tarefinha,
          completa: !tarefinha.completa
        }
        return novoEstado
      } else {
        return tarefinha
      }
    })
    this.setState({tarefas: alteraTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
