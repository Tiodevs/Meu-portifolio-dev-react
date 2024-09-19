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
import ProjetoNotas from './assets/ProjetoNotas.png'
import ProjetoFotos from './assets/ProjetoFotos.png'

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
          img={ProjetoNotas}
          titulo="Frases notas "
          titulo02="- site para anotar frases marcantes"
          descrição="Feito com react.js, firebase para BD e back-end e hospedado na vercel. O objetivo desse site é ter um lugar especifico e seguro para registrar as melhores frases."
          linkdosite="https://frasesnote.vercel.app/"
          linkdorepositorio="https://github.com/Tiodevs/Frases-Note-React"
        />

        <Projeto
          modelo="2"
          img={ProjetoFotos}
          titulo="Portifólio de fotos "
          titulo02="-  site para mostrar ensaios"
          descrição="Feito com React.js, hospedado na vercel e o prototipo no figma e Photoshop. O objetivo desse site é apresentar de maneira bonita e simples os meus ensaios."
          linkdosite="https://sitedefotos.vercel.app/"
          linkdorepositorio="https://github.com/Tiodevs/sitedefotos"
        />

        {/* <TesteGSAP/>   */}

      </div>

      <div className='sectionSobre' id='sectionSobre'>
        <img src={FotoSobre} className='sobreFoto' />

        <div className='sobreInfo'>
          <div className='sobreTitulos'>
            <h1 className='sobreTitulo'>
              Sobre mim
            </h1>
            <p className='sobreDescricao'>Mini bio</p>
          </div>

          <div className='sobreCards a'>
            <h1 className='sobreCardsTitulo'>Voluntário </h1>
            <p className='sobreCardsDescricao'>Em março de 2023, decidi pausar minha carreira para dedicar dois anos ao serviço voluntário em prol da comunidade. Durante esse período, tenho colaborado com <b> ONGs, hospitais</b> de tratamento de câncer e pequenas empresas, oferecendo meu apoio em diversas áreas. Para saber mais sobre essa experiência, fique à vontade para visitar meu LinkedIn.</p>
          </div>

          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>22 anos de idade</h1>
            <p className='sobreCardsDescricao'>Eu tenho <b>22 anos</b> de idade sou do Brasil, Curitiba. Sou apaixonado por tocar instrumentos, ler livros, escrever artigos, tirar fotos, conhecer pessoas e lugares novos.</p>
          </div>

          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>4 anos de experiência</h1>
            <p className='sobreCardsDescricao'>Em 2020, descobri minha paixão pela programação. Comecei com cursos básicos de HTML, CSS e JavaScript, e, em seguida, iniciei a <b>faculdade</b> de Análise e Desenvolvimento de Sistemas, onde pude aprofundar meu conhecimento. Tive a oportunidade de realizar o curso CS50x, <b>oferecido por Harvard</b>, o que ampliou ainda mais minha compreensão sobre tecnologia. Atualmente, estou me dedicando ao estudo para me tornar um programador fullstack altamente qualificado, com o objetivo de estar pronto para assumir projetos de maior complexidade.</p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>Trabalhos</h1>
            <p className='sobreCardsDescricao'>Atuei durante um ano como instrutor de TI para jovens de 12 a 17 anos, ensinando disciplinas como Robótica, Front-end e Análise de Dados. Além disso, trabalhei como freelancer, desenvolvendo sites para empresas e criando sistemas internos personalizados, incluindo soluções para a área de RH.</p>
          </div>
          <div className='sobreCards'>
            <h1 className='sobreCardsTitulo'>Idiomas</h1>
            <p className='sobreCardsDescricao'>Possuo nível intermediário de inglês e estou constantemente me dedicando ao aperfeiçoamento desse idioma. </p>
          </div>
        </div>
      </div>

      

      <footer>
        <img src={LogoFelipe} alt='Logo Footer' className='logoFooter'/>
        <div className='iconsFooter'>
          <a href='https://github.com/Tiodevs' target='_blank'>
            
          <img src={LogoGit} alt='IconeFooter'/>
          </a>
          <a href='https://www.linkedin.com/in/felipe-pereira-dos-santos-a1a3b9207/' target='_blank'>
          <img src={LogoLinkedin} alt='IconeFooter'/>
            
          </a>
          <a href='https://wa.me/+5541987208843' target='_blank'>
          <img src={LogoWhatsApp} alt='IconeFooter'/>
            
          </a>
          <a href='https://www.instagram.com/somente_ofelipe/' target='_blank'>
          <img src={LogoIntagram} alt='IconeFooter'/>
            
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
