import React from 'react'
import './home.css'
import Me from '../../assets/logo.png'
import Cv from '../../assets/heba-cv.pdf'
import HomeSocials from './HomeSocials'

const Home = () => {
  return (
    <div className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Hebah Allah</h1>
        <h4 className='text-light'>Frontend Developer</h4>
        <div className="btns">
          <a href={Cv}  className='btn' download> Download CV</a>
          <a href="#" className='btn btn-primary'> Lets talk</a>
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