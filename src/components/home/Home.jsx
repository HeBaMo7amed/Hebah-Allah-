import React from 'react'
import './home.css'
import Me from '../../assets/logo.png'
import Cv from '../../assets/heba-cv.pdf'
import HomeSocials from './HomeSocials'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Heba Allah</h1>
        <h4 className='text-light'>Frontend Developer</h4>
        <div className="btns">
          <a href={Cv}  className='btn' download> Download CV</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hebatm29@gmail.com&su=Subject&body=Your%20Email%20Content" target='_blank' className='btn btn-primary'> Let's talk</a>
        </div>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#about" className='scroll_down'>Scroll Down</a>
        <HomeSocials/>
      </div>
    </div>
  )
}

export default Home