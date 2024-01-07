import './mainProjects.scss'

const MainProjects = () => {
    let allProgects = [
        {img: "img/projects/riversite.png",projectName: 'Riversate', tools: 'HTML SCSS JS React Redux', projectDescription: 'Delivery web site (is updating)', url: "https://riversite-c5cdd.web.app/"},
        {img: "img/projects/marvel.png",projectName: 'Marvel service', tools: 'HTML SCSS JS React', projectDescription: 'Service with information about all marvel heroes' ,url: "https://github.com/Marflow159/marvel_service"},
        {img: "img/projects/coffee-shop.png",projectName: 'Coffee shop', tools: 'HTML SCSS JS React', projectDescription: 'My first website on React', url: "https://github.com/Marflow159/coffee_shop"}
    ]
    let elements = allProgects.map((project) => {

        const {img, tools, projectName, projectDescription, url} = project
        
        return (
            <div className='project' id={projectName}>
                <img src={img} alt="proj1" />
                <div className='project__lang'>
                    <p>{tools}</p>
                </div>
                <div className='project__text'>
                    <h2>{projectName}</h2>
                    <p> {projectDescription} </p>
                    <a href={url}>Live ~~</a>
                </div>
            </div>
        )
    })
    return (
        <div className="mainProjects" id="works">
            <div className="mainProjects__top">
                <div className='mainProjects__top__left'>
                    <h1><span>#</span>projects</h1>
                    <div className="mainProjects__top__line"></div>
                </div>
            </div>
            <div className="mainProjects__bottom">
                {elements}
            </div>
        </div>
    )
}

export default MainProjects