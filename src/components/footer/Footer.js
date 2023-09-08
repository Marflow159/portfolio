import './footer.scss'
import '../styles/media.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__top__left'>
                    <p>Marflow <span><a href="mailto:vladbohachenko.vb@gmail.com">vladbohachenko.vb@gmail.com</a></span></p>
                    <p>Front-end developer</p>
                </div>
                <div className='footer__top__right'>
                    <h2>Media</h2>
                    <div>
                        <a href="https://github.com/Marflow159"><img src="img/links/Github.png" alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/vlad-bohachenko-756a56279/"><img src="img/links/LinkedIn.png" alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/_vladb._/"><img src="img/links/instagram.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
            <p>© Copyright 2023. Made by Marflow</p>
        </footer>
    )
}

export default Footer