import { NavLink } from 'react-router-dom'

import './mainProjects.scss'

const MainProjects = () => {
    return (
        <div className="mainProjects">
            <div className="mainProjects__top">
                <div className='mainProjects__top__left'>
                    <h1><span>#</span>projects</h1>
                    <div className="mainProjects__top__line"></div>
                </div>
                <NavLink>View all ~~</NavLink>
            </div>
            <div className="mainProjects__bottom">
                <div className='project'>
                    <img src="img/projects/proj1.png" alt="proj1" />
                    <div className='project__lang'>
                        <p>HTML  SCSS  Python  Flask</p>
                    </div>
                    <div className='project__text'>
                        <h2>ChertNodes</h2>
                        <p>Minecraft servers hosting </p>
                        <button>Live ~~</button>
                    </div>
                </div>
                <div className='project'>
                    <img src="img/projects/proj1.png" alt="proj1" />
                    <div className='project__lang'>
                        <p>HTML  SCSS  Python  Flask</p>
                    </div>
                    <div className='project__text'>
                        <h2>ChertNodes</h2>
                        <p>Minecraft servers hosting </p>
                        <button>Live ~~</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProjects