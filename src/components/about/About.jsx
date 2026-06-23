import React from 'react'
import "./about.css"
import Heba from '../../assets/heba.png'
const About = () => {
  return (
    <section className='about' id='about'>
      <div className="top_section">
        <h2>About Heba</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Heba} alt="Heba Allah Mohamed" />
          </div>
        </div>
        <div className="about_content">
          <p>Hello! I'm Heba Allah Mohamed, a passionate web developer. I specialize in creating responsive and user-friendly websites using modern technologies.</p>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
