import './first.scss'
import '../styles/media.scss'

const First = () => {
    return (
        <div className='first'>
            <div className='first__left'>
                <h1>Vlad Bohachenko</h1>

                <h1>front-end developer</h1>
                <h1>front-end developer</h1>

                <button>Contact me!!</button>
            </div>
            <div className='first__right'>
                <div className='first__right__me'>
                    <img src="img/me/me1.png" alt="me1" />
                </div>
                <img className='first__right__logo' src="img/items/Logo.png" alt="Logo" />
                <img className='first__right__dots' src="img/items/Dots.png" alt="dots" />
                <div className='first__right__bottom'>
                    <div className='first__right__bottom__box'></div>
                    <p>Currently working on <span>Portfolio</span></p>
                </div>
            </div>
        </div>
    )
}

export default First;