import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscProject} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Year Experince</small>
            </article>


            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+  Worldwide</small>
            </article>


            <article className="about__card">
              <VscProject className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ab laudantium maiores, accusantium magnam maxime eum reprehenderit, quasi nulla voluptatem magni delectus ipsum aliquid provident, deserunt quae nihil ea dolore?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      
    </section>
  )
}

export default About;