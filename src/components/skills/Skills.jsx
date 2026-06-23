import React from 'react'
import './skills.css'
import Html from '../../assets/html-41.svg';
import Css from '../../assets/css3.svg'
import Javascript from '../../assets/javascript.svg';
import Ts from '../../assets/typescript.svg';
import ReactJS from '../../assets/react.svg';
import Bootstrap from '../../assets/bootstrap-9.svg';
import Tailwind from '../../assets/tailwindcss.svg';
import Figma from '../../assets/figma.svg';
import Sql from '../../assets/sql-9.svg';
import oop from '../../assets/oop.svg';
import Cpp from '../../assets/c-21.svg';
import Csh from '../../assets/c-22.svg';
import Python from '../../assets/python-5.svg';

const skillsData = [
  {
    id: 1,
    image: Html,
    title: 'Html'
  },
  {
    id: 2,
    image: Css,
    title: 'Css'
  },
  {
    id: 3,
    image: Javascript,
    title: 'Js'
  },
  {
    id: 4,
    image: Ts,
    title: 'Ts'
  },
  {
    id: 5,
    image: ReactJS,
    title: 'React'
  },
  {
    id: 6,
    image: Bootstrap,
    title: 'Bootstrap'
  },
  {
    id: 7,
    image: Tailwind,
    title: 'Tailwind'
  },
  {
    id: 8,
    image: Figma,
    title: 'Figma'
  },
  {
    id: 9,
    image: Sql,
    title: 'Sql'
  },
  {
    id: 10,
    image: Cpp,
    title: 'C++'
  },
  {
    id: 11,
    image: Csh,
    title: 'C#'
  },
  {
    id: 12,
    image: Python,
    title: 'Python'
  },
]


const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className="top_section">
        <h2>My Skills</h2>
      </div>
      <div className="container container_skills">
        {skillsData.map(({ id, image, title }) =>
          <article className='card_skill'>
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4> {title} </h4>
            </div>
          </article>)}

      </div>
    </section>
  )
}

export default Skills