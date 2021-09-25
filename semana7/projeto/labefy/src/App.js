import react from "react";
import styled from "styled-components";
import CriaPlaylist from "./components/adicionaplaylist";
import AllPlaylists from "./components/allPlaylists";

const ContainerDiv = styled.div`

`

export default class App extends react.Component {
    render(){
      return (
        <ContainerDiv>
        <CriaPlaylist />
        <hr/>
        <AllPlaylists />
      </ContainerDiv>
  );
}
}
