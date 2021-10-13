import Router from './Routes/Router';
import {Header} from './styled';
import logo from './img/rocket-logo.png'

const App = () => {
  return (
    <div>
      <Header>
          <a href="./">
              <img src={logo} alt="logo de foguete" width="50" height="50"/>
          </a>
          <h1>LabeTrip</h1>
      </Header>
      <hr/>
      <Router />
    </div>
  );
}

export default App;
