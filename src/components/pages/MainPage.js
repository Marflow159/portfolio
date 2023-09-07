import First from "../first/First"
import MainProjects from "../mainProjects/MainProjects";
import MainSkills from "../mainSkills/MainSkills";
import MainAboutMe from "../mainAboutMe/MainAboutMe";

import './mainPage.scss'

const MainPage = () => {
    return(
        <div className="mainPage">

            <First/>
            <MainProjects/>
            <MainSkills/>
            <MainAboutMe/>

            <img className="frame1" src="img/items/Frame.png" alt="Frame1" />
            <img className="rec2" src="img/items/Rectangle1.png" alt="Rectangle1" />
            <img className="rec3" src="img/items/Rectangle2.png" alt="Rectangle2" />
            <img className="frame2" src="img/items/Frame2.png" alt="Rectangle1" />
        </div>
    )
}

export default MainPage;