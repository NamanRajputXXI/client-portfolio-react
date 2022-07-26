import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter,BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
   <footer>
    <a href="#home" className='footer__logo'>Prerna Sharma</a>
    <ul className="permalinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonial">Testimonial</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="hhtps://facebook.com"><BsFacebook/></a>
      <a href="hhtps://instagram.com"><BsInstagram/></a>
      <a href="hhtps://twitter.com"><BsTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Prerna Sharma. ALl rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer