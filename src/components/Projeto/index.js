import style from './projeto.module.css'
import logoGit from '../../assets/LogoGitHub.svg'

export function Projeto({modelo, img, titulo, titulo02, descrição, linkdosite}){


    return(
        <div className={modelo === "1" ? style.projeto : style.projeto2}>
            <img src={img} className={style.capaProjeto} alt="Capa do projeto"/>
            <div className={modelo === "1" ? style.projetoText : style.projetoText2}>
                <h1 className={style.projetoTitulo} >{titulo}<span>{titulo02}</span></h1>
                <p className={style.projetoDescrição}>{descrição}</p>

                <div className={style.projetoLinks}>
                    <a className={style.verSite} href={linkdosite}>Ver Site</a>
                    
                    <img src={logoGit} className={style.linkGit} alt='logo git btn'/>
                </div>
            </div>
        </div>


    )
}