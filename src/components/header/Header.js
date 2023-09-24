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

    const closeBurger = () =>{
        document.getElementById('menu__toggle').checked = false;
    }
    return (
        <header className='header'>
            <a href="#home">
                <p>Marflow</p>
            </a>
            <ul>
                <a  href="#home">
                    <li><span>#</span>home</li>
                </a>
                <a href="#works">
                    <li><span>#</span>works</li>
                </a>
                <a href="#about-me">
                    <li><span>#</span>about-me</li>
                </a>
                <a href="#contacts">
                    <li><span>#</span>contacts</li>
                </a>
            </ul>
            <div className="hamburger-menu">
                <input onClick={(e) => bodyScrollOff(e)} className="menu__toggle" id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <div className="menu__box">
                    <ul >
                        <a onClick={() => closeBurger()} href="#home">
                            <li><span>#</span>home</li>
                        </a>
                        <a onClick={() => closeBurger()} href="#works">
                            <li><span>#</span>works</li>
                        </a>
                        <a onClick={() => closeBurger()} href="#about-me">
                            <li><span>#</span>about-me</li>
                        </a>
                        <a onClick={() => closeBurger()} href="#contacts">
                            <li><span>#</span>contacts</li>
                        </a>
                    </ul>

                    <div className="menu__box__links">
                        <a href="https://github.com/Marflow159"><img src="img/links/Github.svg" alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/vlad-bohachenko-756a56279/"><img src="img/links/LinkedIn.svg" alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/_vladb._/"><img src="img/links/instagram.svg" alt="LinkedIn" /></a>
                    </div>
                </div>


            </div>
        </header>


    )
}

export default Header;