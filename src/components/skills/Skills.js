import './skills.scss'

const Skills = () => {
    let skills = [
        {
            top: "Languages",
            bottom: "JavaScript TypeScript"
        },
        {
            top: "Tools",
            bottom: "Figma Git VSCode"
        },
        {
            top: "Other",
            bottom: "HTML CSS SCSS"
        },
        {
            top: "Frameworks",
            bottom: "React Redux"
        }
    ]

    let elements = skills.map(skill => {
        return (
            <div className='skillElement'>
                <p>{skill.top}</p>
                <p>{skill.bottom}</p>
            </div>
        )
    })
    return (
        <div className='skills'>
            <div className='mainSkills__top'>
                <h1><span>#</span>skills</h1>
            </div>
            <div className='mainSkills__bottom'>
                <div className='mainSkills__bottom__skills2'>
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default Skills