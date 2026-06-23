import React from 'react'
import './services.css'
import { FaProjectDiagram } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section className='services' id='services' >
      <div className="top_section">
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className='card'>
          <FaProjectDiagram className="iconns" />
          <h3>Full Project Development</h3>
          <p className='text-light'>Complete project handling from inception to delivery.</p>
        </article>
        <article className='card'>
          <FaTasks className="iconns" />
          <h3>Task-Based Assistance</h3>
          <p className='text-light'>Expert help with specific tasks, feature enhancements, and debugging.</p>
        </article>
        <article className='card'>
          <FaToolbox className="iconns"/> 
          <h3>Code Maintenance</h3>
          <p className='text-light'>Regular updates, optimizations, and security for maintaining code health.</p>
        </article>
        <article className='card'>
          <FaMobileAlt className="iconns"/>
          <h3>Responsive Design</h3>
          <p className='text-light'>Crafting designs that ensure seamless functionality across all devices.</p>
        </article>
      </div>
    </section>
  )
}

export default Services