import './mainContacts.scss'

const MainContacts = () => {
    return (
        <div className="mainContacts" id='contacts'>
            <div className="mainContacts__top">
                <h1><span>#</span>contacts</h1>
                <div className="mainContacts__top__line"></div>
            </div>

            <div className="mainContacts__bottom">
                <p>If you have request or question, don’t hesitate to contact me</p>
                <div className='mainContacts__bottom__links'>
                    <p>Message me here</p>
                    <div className='mainContacts__bottom__links__text'>
                        <a href="https://t.me/vladb159"><img src="img/links/telegram.svg" alt="" />
                            vladb159</a>
                    </div>
                    <div className='mainContacts__bottom__links__text'>
                        <a href="https://www.instagram.com/_vladb._/"><img src="img/links/instagram.svg" alt="" />
                            _vladb._</a>
                    </div>
                    <div className='mainContacts__bottom__links__text'>
                        <a href="mailto:vladbohachenko.vb@gmail.com"><img src="img/links/Email.svg" alt="" />
                            vladbohachenko.vb@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MainContacts;