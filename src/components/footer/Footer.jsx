import React from 'react'
import './footer.css'
import { FaLinkedin ,FaGithub  } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
    return(
    <footer>
        <a href="#"className='footer_logo'>Heba Allah</a>

        <ul className='permalinks'>
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#about">About</a> </li>
            <li> <a href="#skills">Skills</a> </li>
            <li> <a href="#services">Services</a> </li>
            <li> <a href="#projects">Projects</a> </li>
            <li> <a href="#contact">Contact</a> </li>
        </ul>
        <div className="footer_socials">
            <a href="https://www.linkedin.com/in/hebah-allah-mohamed-36bb97283/" target='_blank'><FaLinkedin/> </a>
            <a href="https://github.com/HeBaMo7amed" target='_blank'> <FaGithub/></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hebatm29@gmail.com&su=Subject&body=Your%20Email%20Content" target='_blank'><MdOutlineEmail/></a>
        </div>
        <div className="footer_copyright">

            <small>
                &copy; <a href="">Heba Allah</a> All rights reserved 
            </small>
        </div>
    </footer>
    )
}

export default Footer