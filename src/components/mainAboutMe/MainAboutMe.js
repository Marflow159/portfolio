import './mainAboutMe.scss'

const MainAboutMe = () => {
    return (
        <div className="mainAboutMe">
            <div className='mainAboutMe__top'>
                <h1><span>#</span>about-me</h1>
                <div className="mainAboutMe__top__line"></div>
            </div>
            <div className='mainAboutMe__bottom'>
                <div className='mainAboutMe__bottom__text'>
                    <p>Hello, i`m Vlad!</p>
                    <p>I am a self-taught frontend developer, living in Lviv, Ukraine. I can build responsive websites from scratch. I show my creativity and knowledge in the development of websites. </p>
                    <p>Programming has been in my life for a year, now I am improving my skills and abilities.
                        I am always eager to learn about the latest technologies and frameworks. </p>
                    <button> Read more ~~</button>
                </div>
                <div className='me2'>
                    <img src="img/me/me2.png" alt="me2" />
                </div>
                {/* <img className='dots3' src="img/items/Dots3.png" alt="dots3" />
                <img className='dots4' src="img/items/Dots4.png" alt="dots4" /> */}
            </div>
        </div>
    )
}

export default MainAboutMe;