import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post 
          nomeUsuario={'Murilo'}
          fotoUsuario={'https://picsum.photos/50/50/?=2'}
          fotoPost={'https://picsum.photos/200/150/?=2'}
        />
        <Post 
          nomeUsuario={'Sarah'}
          fotoUsuario={'https://picsum.photos/50/50/?=3'}
          fotoPost={'https://picsum.photos/200/150/?=3'}
        />
      </MainContainer>
  state={
    usuarios: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Murilo',
        fotoUsuario: 'https://picsum.photos/50/50/?=2',
        fotoPost: 'https://picsum.photos/200/150/?=2'
      },
      {
        nomeUsuario: 'Sarah',
        fotoUsuario: 'https://picsum.photos/50/50/?=3',
        fotoPost: 'https://picsum.photos/200/150/?=3'
      },
    ],

    valorInputUsuario: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: '',
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoArrayPost = [...this.state.usuarios]
    novoArrayPost.push(novoPost)
    this.setState({usuarios: novoArrayPost, valorInputUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: ""})
  }
  
  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {
    const postUsuarios = this.state.usuarios.map((postagens) => {
      return (
        <Post 
          nomeUsuario = {postagens.nomeUsuario}
          fotoUsuario = {postagens.fotoUsuario}
          fotoPost = {postagens.fotoPost}
          />
      )
    })
      return (
      <div>
        <input 
          value={this.state.usuarios.nomeUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome do Usuário"}
        />
        <input 
          value={this.state.usuarios.fotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"URL da foto do usuário"}
        />
        <input 
          value={this.state.usuarios.fotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"URL foto do post"}
        />
        <button onClick={this.adicionarPost}>Adicionar</button>
        <MainContainer>
          {postUsuarios}
        </MainContainer>
      </div>
    );
  }
}

export default App;
