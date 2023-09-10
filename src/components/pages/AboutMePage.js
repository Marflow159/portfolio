import AboutMe from "../aboutMe/AboutMe"
import Skills from "../skills/Skills"
import Facts from "../facts/Facts"

import './pages.scss'
import '../styles/media.scss'

const AboutMePage = () => {
    return (
        <div className="aboutMePage">

            <AboutMe />
            <Skills/>
            <Facts/>

            <div className="aboutMePage__items">
                <img className="rec4" src="img/items/Rectangle1.png" alt="Rectangle4" />
                <img className="rec5" src="img/items/Rectangle2.png" alt="Rectangle5" />
                <img className="frame3" src="img/items/Frame3.png" alt="frame3" />
                <img className="frame4" src="img/items/Frame.png" alt="frame4" />
            </div>
        </div>
    )
}

export default AboutMePage