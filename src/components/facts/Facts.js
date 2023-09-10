import './facts.scss'

const Facts = () => {
    let skills = [
        {
            top: <p>I like to watch <span>movies</span>  and <span>series</span></p>,
        },
        {
            top: <p>I have been to <span>all European cities</span> </p>,
        },
        {
            top: <p>I like to cook</p>,
        },
        {
            top: <p>I have been <span>dancing</span> for 11 years</p>,
        },
        {
            top: <p>I love <span>animals</span> , but I am <span>allergic</span> to them</p>,
        },
        {
            top: <p>My favorite sport is <span>volleyball</span> </p>,
        }
    ]

    let elements = skills.map(skill => {
        return (
            <div className='factsSkillElement'>
                {skill.top}
            </div>
        )
    })
    return (
        <div className="facts">
            <div className='facts__top'>
                <h1><span>#</span>my-fun-facts</h1>
            </div>
            <div className='facts__bottom'>
                <div className='facts__bottom__fact'>
                    {elements}
                </div>

                <img src="img/items/Group1.png" alt="" />
            </div>
        </div>
    )
}

export default Facts;