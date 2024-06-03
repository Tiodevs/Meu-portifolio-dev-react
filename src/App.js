import './App.css';
import { Menu } from './components/Menu';
import FotoHeader from './assets/fotoHeader.png'
import LogoGithub from './assets/LogoGitHub.svg'
import ProjetoRFCC from './assets/ProjetoRFCC.png'
import ProjetoAssumtek from './assets/ProjetoAssumtek.png'
import ProjetoTravelCommunity from './assets/ProjetoTravelCommunity.png'
import { Projeto } from './components/Projeto';

function App() {
  return (
    <div className="App">
      <Menu />

      <header className='header'>
        <img src={FotoHeader} className='fotoHeader' alt='Foto minha no header' />
        <div className='textsHeader'>
          <h1>Olá, eu sou o Felipe<br /><span>Programador web.</span></h1>
          <p>Eu transformo desafios digitais em soluções inovadoras, criando<br />experiências cativantes e funcionais.</p>
        </div>
        <button className='btnHeader'>
          <img src={LogoGithub} alt='Icone do GitHub no Button do header' />
          Meu perfil github
        </button>
      </header>

      <div id='projetos'>
        <div className='sectionTituloProjetos'>
          <h1 className='tituloProjetos'>Projetos</h1>
          <div className='linhaTituloProjetos'></div>
        </div>

        <Projeto
          modelo="1"
          img={ProjetoRFCC}
          titulo="RFCC "
          titulo02="- site institucional para um hospital de câncer"
          descrição="Feito com HTML, CSS, JS e hospedado no Firbase. O objetivo desse site é aumentar visibilidade dos projetos da RFCC e receber doações."
          linkdosite="https://github.com/Tiodevs"
        />

        <Projeto
          modelo="2"
          img={ProjetoAssumtek}
          titulo="Assumtek "
          titulo02="-  site institucional para cliente e B2B"
          descrição="Feito com wordpress, elemntos, figma e Photoshop. O objetivo desse site ser um local onde apresenta a empresa e os produtos que ela oferece."
          linkdosite="https://github.com/Tiodevs"
        />

        <Projeto
          modelo="1"
          img={ProjetoTravelCommunity}
          titulo="Travel Community "
          titulo02="- landing page para curso de ingês"
          descrição="Feito com HTML, CSS, JS e hospedado no Firbase. O objetivo desse site é capturar leads e trazer mais informações sobre um novo lançamento."
          linkdosite="https://github.com/Tiodevs"
        />

      </div>
    </div>
  );
}

export default App;
