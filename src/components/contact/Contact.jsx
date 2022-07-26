import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_cne1yga', 'template_y9hc0nd', form.current, '673ChtsHfEvOz5oci')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>namanrajput801@gmail.com</h5>
            <a href="mailto:namanrajput801@gmail.com" >Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>NamanRajput</h5>
            <a href="www.facebook.com" >Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+919625441390" >Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact