import First from "../first/First"
import MainProjects from "../mainProjects/MainProjects";
import MainSkills from "../mainSkills/MainSkills";

import './mainPage.scss'

const MainPage = () => {
    return(
        <div className="mainPage">

            <First/>
            <MainProjects/>
            <MainSkills/>
                
            <img className="frame1" src="img/items/Frame.png" alt="Frame1" />
            <img className="rec2" src="img/items/Rectangle1.png" alt="Rectangle1" />
        </div>
    )
}

export default MainPage;