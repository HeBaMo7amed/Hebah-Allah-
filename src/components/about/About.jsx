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

          <p>
            Hi, I'm Heba Allah, a Front-End Developer passionate about turning
            ideas into responsive and engaging web experiences. I specialize in
            HTML, CSS, JavaScript, React, and Bootstrap, with a strong eye for
            detail and a pixel-perfect mindset.
          </p>

          <p>
            You could say I use my OCD as a weapon to craft clean, polished
            designs. I value quality, teamwork, and delivering projects on time.
            I'm always learning, always improving, and always looking for ways
            to create better user experiences.
          </p>

          <p>
            Also, I'm fun to work with, understand football surprisingly well,
            and I'm a proud Barcelona fan. My goal is to build modern,
            user-friendly websites that combine beautiful design with seamless
            functionality.
          </p>


          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
