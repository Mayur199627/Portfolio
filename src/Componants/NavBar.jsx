import React from 'react';
import { Button } from 'react-bootstrap';
import insta from '../assets/insta.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import bar from '../assets/bar.svg';
import massage from '../assets/massage.svg';
import download from '../assets/download.svg';
import { Link } from 'react-scroll';
import CV from '../assets/Mayur-CV.pdf';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="profile-tab">
        <div className="home">
        <Link to='home' duration={500} >Home</Link>
        </div>
        <div className="about">
          <Link to='about' offset={-50} duration={500} >About me</Link>
        </div>
        <div className="skills">
          <Link to='skill' offset={-50} duration={500} >Skills</Link>
        </div>
        <div className="project">
          <Link to='projects' offset={-50} duration={500} >Projects</Link>
        </div>
      </div>
      <div className="bar-icon">
        <img src={bar} alt="bar" />
      </div>
      <div className="social-icon-contact">
        <div className="icon-btn">
          <Button href='https://www.linkedin.com/in/mayur-asati-765851253/' target='blank' id='insta'>
            <img src={linkedin} alt="linkedin" />
          </Button>
          <Button href='' target='blank'>
            <img src={twitter} alt="twitter" />
          </Button>
          <Button href='https://www.instagram.com/mayurasati27/' target='blank'>
            <img src={insta} alt="insta" />
          </Button>
        </div>
      </div>
      <div className="contact">
      <Button className='download-cv'><a href={CV} download>Download CV</a></Button>
        <Button variant='light' style={{ fontFamily: 'Permanent Marker', padding: '5px', border: 'none', cursor: 'pointer', borderRadius: '5px', background: '#ffffff', fontSize:'1.2rem' }}>
          <Link to='contact'>Let's Connect</Link>
        </Button>
      </div>
      <div className="massage">
      <Link to='contact'><img src={massage} alt="" /></Link>
      <a href={CV} download><img src={download} alt="" /></a>
      </div>
    </div>
  )
}

export default NavBar