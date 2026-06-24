import React, { useState ,useEffect } from 'react';
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current = "home";

            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.clientHeight;

                if (window.scrollY >= top - height / 3) {
                    current = section.getAttribute("id");
                }
            });

            setActiveNav(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // مهم أول تحميل

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className='side_nav'>
            <a href="#home" className={activeNav === "#home" ? "active" : ""} onClick={() => setActiveNav("#home")}> <IoHomeOutline /> </a>
            <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")} > <LuUserRound /> </a>
            <a href="#skills" className={activeNav === "#skills" ? "active" : ""} onClick={() => setActiveNav("#skills")} > <FaTools /> </a>
            <a href="#services" className={activeNav === "#services" ? "active" : ""} onClick={() => setActiveNav("#services")} > <BiBook /> </a>
            <a href="#projects" className={activeNav === "#projects" ? "active" : ""} onClick={() => setActiveNav("#projects")} > <RiServiceLine /> </a>
            <a href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav("#contact")} > <BiMessageSquareDetail /> </a>

        </nav>
    )
}
export default Nav;
