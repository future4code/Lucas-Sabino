import { useState } from "react/cjs/react.development";
import Matches from "./components/matches/matches";
import Perfis from "./components/perfis/perfis";
import couples from "./components/img/couples.png"
import styled from "styled-components";
import user from "./components/img/user.png"
import flame from "./components/img/flame.png"

const IconeMatches = styled.img`
width: 20px;
height: 20px;
  :hover{
    position: static;
    transition: 0.5s;
    width: 22px;
    height: 22px;
  }
`

const Icones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-left: 15px;
  align-items: center;
  margin-bottom: 3px;
`

const TelaInicio = styled.div`
  border: 1px solid black;
  border-radius: 2%;
  width: 335px;
  padding-top: 10px;
`

const Astro = styled.span`
  color: #FFB085;
`

const Tinder = styled.span`
  color: #90AACB;
`

const App = () => {
  const [pagina, setPagina] = useState("Perfis")

  return (
    <TelaInicio>
      <Icones>
        <a title="Perfis" onClick={() => setPagina("Perfis")}><IconeMatches src={user}/></a>
        <div>
        <IconeMatches src={flame} title="Astrotinder" alt="Icone de foguinho e nome Astrotinder"></IconeMatches>
        <Astro>Astro</Astro><Tinder>Tinder</Tinder>
        </div>
        <a title="Matches" onClick={() => setPagina("Matches")}><IconeMatches src={couples}/></a>
      </Icones>
      {pagina === "Perfis" ? <Perfis /> : <Matches />}
    </TelaInicio>
  );
}

export default App;
