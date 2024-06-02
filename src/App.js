import './App.css';
import { Menu } from './components/Menu';
import FotoHeader from './assets/fotoHeader.png'
import LogoGithub from './assets/LogoGitHub.svg'

function App() {
  return (
    <div className="App">
      <Menu/>

      <header className='header'>
        <img src={FotoHeader} className='fotoHeader'/>
        <div className='textsHeader'>
          <h1>Olá, eu sou o Felipe<br/><span>Programador web.</span></h1>
          <p>Eu transformo desafios digitais em soluções inovadoras, criando<br/>experiências cativantes e funcionais.</p>
        </div>

        <button className='btnHeader'>
          <img src={LogoGithub}/>
          Meu perfil github 
        </button>
      </header>
    </div>
  );
}

export default App;
