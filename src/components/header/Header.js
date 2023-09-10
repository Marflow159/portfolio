import { NavLink } from "react-router-dom"

import './header.scss'

const Header = () => {
    const body = document.body
    let burgerChecked = false

    const bodyScrollOff = (e) => {
        if (burgerChecked === false) {
            body.style.overflow = 'hidden'
            burgerChecked = true
        } else {
            body.style.overflow = 'auto'
            burgerChecked = false
        }
    }

    return (
        <header className='header'>
            <NavLink to='/'>
                <p>Marflow</p>
            </NavLink>

            <ul>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <li><span>#</span>home</li>
                </NavLink>
                <NavLink to='/works' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <li><span>#</span>works</li>
                </NavLink>
                <NavLink to='/about-me' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <li><span>#</span>about-me</li>
                </NavLink>
                <NavLink to='/contacts' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <li><span>#</span>contacts</li>
                </NavLink>
            </ul>

            <div className="hamburger-menu">
                <input onClick={(e) => bodyScrollOff(e)} className="menu__toggle" id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <div className="menu__box">
                    <ul >
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                            <li><span>#</span>home</li>
                        </NavLink>
                        <NavLink to='/works' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                            <li><span>#</span>works</li>
                        </NavLink>
                        <NavLink to='/about-me' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                            <li><span>#</span>about-me</li>
                        </NavLink>
                        <NavLink to='/contacts' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                            <li><span>#</span>contacts</li>
                        </NavLink>
                    </ul>

                    <div className="menu__box__links">
                        <a href="https://github.com/Marflow159"><img src="img/links/Github.png" alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/vlad-bohachenko-756a56279/"><img src="img/links/LinkedIn.png" alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/_vladb._/"><img src="img/links/instagram.png" alt="LinkedIn" /></a>
                    </div>
                </div>


            </div>
        </header>


    )
}

export default Header;