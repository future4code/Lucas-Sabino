import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

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
    );
  }
}

export default App;
