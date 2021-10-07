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
`

const Icones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-left: 15px;
  align-items: center;
`

const TelaInicio = styled.div`
  border: 1px solid black;
  border-radius: 2%;
  width: 350px;
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
        <button title="Perfis" onClick={() => setPagina("Perfis")}><IconeMatches src={user}/></button>
        <div>
        <IconeMatches src={flame} title="Astrotinder"></IconeMatches>
        <Astro>Astro</Astro><Tinder>Tinder</Tinder>
        </div>
        <button title="Matches" onClick={() => setPagina("Matches")}><IconeMatches src={couples}/></button>
      </Icones>
      {pagina === "Perfis" ? <Perfis /> : <Matches />}
    </TelaInicio>
  );
}

export default App;
