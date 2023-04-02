import React from 'react'
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import JS from '../assets/js.svg'
import REACT from '../assets/react.svg'



function Skill() {
  return (
    <div id='skill'>
    <h1 className='heading'>Skills</h1>
    <div className='skill'>
        <div className="html language">
        <img src={HTML} alt="html" />
        <span>HTML</span>
        </div>
        <div className="css language">
        <img src={CSS} alt="css" />
        <span>CSS</span></div>
        <div className="js language">
        <img src={JS} alt="js" />
        <span>JavaScript</span></div>
        <div className="recat language">
        <img src={REACT} alt="react" />
        <span>React</span></div>
    </div>
    </div>
  )
}

export default Skill