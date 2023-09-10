import { NavLink } from "react-router-dom"

import './aboutMe.scss'


const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className='aboutMe__h2'>
                <NavLink to='/'>
                    <h1><span>/</span>about-me</h1>
                </NavLink>

                <p>Who am i?</p>
            </div>

            <div className='mainAboutMe__bottom'>
                <div className='mainAboutMe__bottom__text'>
                    <p>Hello, i`m Vlad!</p>
                    <p>I am a self-taught frontend developer, living in Lviv, Ukraine. I can build responsive websites from scratch. I show my creativity and knowledge in the development of websites. </p>
                    <p>Programming has been in my life for a year, now I am improving my skills and abilities.
                        I am always eager to learn about the latest technologies and frameworks. </p>
                </div>
                <div className='me2'>
                    <img src="img/me/me2.png" alt="me2" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;