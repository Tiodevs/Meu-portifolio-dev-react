import style from './menu.module.css'
import logo from '../../assets/LogoFelipe.svg'
import './hamburgers.css'
import { useState } from 'react'

export function Menu() {

    const [isActive, setIsActive] = useState('hamburger hamburger--collapse')
    const [menuMobi, setMenuMobi] = useState(style.menuMobi)

    function handleIsActive() {
        if (isActive === "hamburger hamburger--collapse") {
            setIsActive("hamburger hamburger--collapse is-active")
        } else {
            setIsActive("hamburger hamburger--collapse")
        }

        if (menuMobi == style.menuMobi) {
            setMenuMobi(style.menuMobiOpen)
        } else {
            setMenuMobi(style.menuMobi)
        }
    }

    return (
        <nav className={style.menu}>
            <div>

                <img src={logo} alt='Logo Header' />

                <ul>
                    <a href='.header'>Projetos</a>
                    <a href='.header'>Sobre mim</a>
                    <a href='.header'>Contato</a>
                    <a href='.header'>Meu CV</a>
                </ul>


                <button class={isActive} type="button" onClick={handleIsActive}>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <ul className={menuMobi}>
                <a href='.header'>Projetos</a>
                <a href='.header'>Sobre mim</a>
                <a href='.header'>Contato</a>
                <a href='.header'>Meu CV</a>
            </ul>
        </nav>



    )
}