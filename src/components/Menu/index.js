import style from './menu.module.css'
import logo from '../../assets/LogoFelipe.svg'

export function Menu(){
    return(
        <nav className={style.menu}>
            <img src={logo}/>

            <ul>
                <a>Projetos</a>
                <a>Sobre mim</a>
                <a>Contato</a>
                <a>Meu CV</a>
            </ul>
        </nav>
    )
}