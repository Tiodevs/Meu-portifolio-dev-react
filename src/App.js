// CSS
import './App.css';

// Imagens
import LogoFelipe from './assets/LogoFelipe.svg'
import LogoGit from './assets/LogoGit.svg'
import LogoIntagram from './assets/LogoIntagram.svg'
import LogoWhatsApp from './assets/LogoWhatsApp.svg'
import LogoLinkedin from './assets/LogoLinkedin.svg'
import FotoHeader from './assets/fotoHeader.png'
import FotoSobre from './assets/FotoSobre.png'
import LogoGithub from './assets/LogoGitHub.svg'
import IconArrow from './assets/IconArrow.png'
import ProjetoRFCC from './assets/ProjetoRFCC.png'
import ProjetoAssumtek from './assets/ProjetoAssumtek.png'
import ProjetoTravelCommunity from './assets/ProjetoTravelCommunity.png'

// Componentes
import { Projeto } from './components/Projeto';
import { Menu } from './components/Menu';

// gsap
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'


function App() {

  // Animação do GSAP
  useLayoutEffect(() => {
    gsap.to('.animatioHeader', {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      ease: 'power2.inOut'
    })

    gsap.to("#projetos", {
      y: 0,
      opacity: 100,
      color: "blue",
      delay: 2
    })

    return () => {
      gsap.killTweensOf(".animatioHeader")
    }

  }, [])

  return (
    <div className="App">

      <Menu />

      <header className='header '>
        <img src={FotoHeader} className='fotoHeader animatioHeader' alt='Foto minha no header' />
        <div className='textsHeader animatioHeader'>
          <h1>Olá, eu sou o Felipe<br /><span>Programador web.</span></h1>
          <p>Eu transformo desafios digitais em soluções inovadoras, criando<br />experiências cativantes e funcionais.</p>
        </div>
        <button className='btnHeader animatioHeader'>
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

        {/* <TesteGSAP/>   */}

        <Projeto
          modelo="1"
          img={ProjetoTravelCommunity}
          titulo="Travel Community "
          titulo02="- landing page para curso de ingês"
          descrição="Feito com HTML, CSS, JS e hospedado no Firbase. O objetivo desse site é capturar leads e trazer mais informações sobre um novo lançamento."
          linkdosite="https://github.com/Tiodevs"
        />

      </div>

      <div className='sectionSobre'>
        <img src={FotoSobre} className='sobreFoto' />

        <div className='sobreInfo'>
          <div className='sobreTitulos'>
            <h1 className='sobreTitulo'>
              Sobre mim
            </h1>
            <p className='sobreDescricao'>Mini bio</p>
          </div>

          <div className='sobreCards a'>
            <h1 className='sobreCardsTitulo'>22 anos de idade</h1>
            <p className='sobreCardsDescricao'>Eu tenho 22 anos de idade sou do Brasil, Curitiba. Sou apaixonado por tocar instrumentos, ler livros, escrever artigos, tirar fotos, conhecer pessoas e lugares novos.</p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>Voluntário </h1>
            <p className='sobreCardsDescricao'>Com 20 anos eu aceitei o chamado de ser um missionário de serviço, ou seja, dedicar 2 anos integrais para ajudar as outras pessoas com meus talentos voluntariamente. Nesses dois anos ajudei muitas ONGs, hospitais e pequenas empresas.</p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>4 anos de experiência</h1>
            <p className='sobreCardsDescricao'>Em 2020, durante a pandemia eu descobri a minha habilidade em programação quando através da Alura fiz minha primeira pagina com HTML e CSS, depois disso fiz faculdade e outros cursos.</p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>Formação</h1>
            <p className='sobreCardsDescricao'>Em 2020, durante a pandemia eu descobri a minha habilidade em programação quando através da Alura fiz minha primeira pagina com HTML e CSS, depois disso fiz faculdade e outros cursos. </p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>Trabalhos</h1>
            <p className='sobreCardsDescricao'>Em 2020, durante a pandemia eu descobri a minha habilidade em programação quando através da Alura fiz minha primeira pagina com HTML e CSS, depois disso fiz faculdade e outros cursos. </p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>Idiomas</h1>
            <p className='sobreCardsDescricao'>Em 2020, durante a pandemia eu descobri a minha habilidade em programação quando através da Alura fiz minha primeira pagina com HTML e CSS, depois disso fiz faculdade e outros cursos. </p>
          </div>
        </div>
      </div>

      <div className='ctaFinal'>
        <h1 className='ctaFinalText'>Não perca <span>tempo!!</span></h1>
        <button className='ctaFinalBtn'>ENTRE EM CONTATO<img src={IconArrow}/></button>
      </div>

      <footer>
        <img src={LogoFelipe} alt='Logo Footer' className='logoFooter'/>
        <div className='iconsFooter'>
          <a href='' target='_blank'>
            
          <img src={LogoGit} alt='IconeFooter'/>
          </a>
          <a href='' target='_blank'>
          <img src={LogoLinkedin} alt='IconeFooter'/>
            
          </a>
          <a href='' target='_blank'>
          <img src={LogoWhatsApp} alt='IconeFooter'/>
            
          </a>
          <a href='' target='_blank'>
          <img src={LogoIntagram} alt='IconeFooter'/>
            
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
