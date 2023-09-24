import './facts.scss'

const Facts = () => {
    let skills = [
        {
            id: 1,
            top: <p>I like to watch <span>movies</span>  and <span>series</span></p>,
        },
        {
            id: 2,
            top: <p>I have been to <span>all European cities</span> </p>,
        },
        {
            id: 3,
            top: <p>I like to cook</p>,
        },
        {
            id: 4,
            top: <p>I have been <span>dancing</span> for 11 years</p>,
        },
        {
            id: 5,
            top: <p>I love <span>animals</span> , but I am <span>allergic</span> to them</p>,
        },
        {
            id: 6,
            top: <p>My favorite sport is <span>volleyball</span> </p>,
        }
    ]

    let elements = skills.map(skill => {
        return (
            <div className='factsSkillElement' id={skill.id}>
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