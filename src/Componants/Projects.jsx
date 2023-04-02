import React from 'react'

function Projects() {
  return (
    <div id='projects'>
    <h1 className='heading'>Projects</h1>
    <div className="project-cont">
        <div className="single-project-1">
            <div className="project-intro">
            <div className="project-name-1"><h2>The Mausam App</h2></div>
            <div className="project-tech">
                <ul>
                <li>
                Tech Stack
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Web API</li>
                </ul>
                </li>
                </ul>
            </div>
            </div>
            <div className="project-description">
            <button><a href="https://mayur199627.github.io/Weather-App/" target='blank'>Live Link</a></button>
            <button><a href="https://github.com/Mayur199627/Weather-App" target='blank'>Repo Link</a></button>
            </div>
        </div>
        <div className="single-project-2">
            <div className="project-intro">
            <div className="project-name-2"><h2>The WhatsApp</h2></div>
            <div className="project-tech">
                <ul>
                <li>
                Tech Stack
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                </ul>
                </li>
                </ul>
            </div>
            </div>
            <div className="project-description">
            <button><a href="https://mayur199627.github.io/WhatsApp-Web-Clone/loginpage.html" target='blank'>Live Link</a></button>
            <button><a href="https://github.com/Mayur199627/WhatsApp-Web-Clone" target='blank'>Repo Link</a></button>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Projects