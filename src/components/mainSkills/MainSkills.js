import './mainSkills.scss'
import '../styles/media.scss'


const MainSkills = () => {
    let skills = [
        {top: "Languages",
        bottom: "JavaScript"},
        {top: "Tools",
        bottom: "Figma Git VSCode"},
        {top: "Other",
        bottom: "HTML CSS SCSS"},
        {top: "Frameworks",
        bottom: "React Redux"}
    ]

    let elements = skills.map(skill =>{
        return(
            <div className='skillElement'>
                <p>{skill.top}</p>
                <p>{skill.bottom}</p>
            </div>
        )
    })
    return (
        <div className="mainSkills">
            <div className='mainSkills__top'>
                <h1><span>#</span>skills</h1>
                <div className="mainSkills__top__line"></div>
            </div>
            <div className='mainSkills__bottom'>
                <div className='mainSkills__bottom__photo'>
                    <img src="img/items/Group.png" alt="Group"/>
                </div>
                
                <div className='mainSkills__bottom__skills'>
                    {elements}
                </div>
            </div>

        </div>
    )
}

export default MainSkills;