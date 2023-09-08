import { NavLink } from "react-router-dom"

import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <p>Marflow</p>
            </NavLink>

            <ul>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <li><span>#</span>home</li>
                </NavLink>
                <li><span>#</span>works</li>
                <li><span>#</span>about-me</li>
                <li><span>#</span>contacts</li>
            </ul>



        </header>
    )
}

export default Header;