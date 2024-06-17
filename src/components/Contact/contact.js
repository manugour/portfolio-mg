import React from 'react';
import './contact.css';
import FacebookIcon from "../../assets/facebook-icon.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_4uwh1im', 'template_t8z0ysh', form.current, {
            publicKey: 'NQ9PyU6wgRLaLBESe',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill the form to discusss any work oppurtunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" name='from_name' className="name" placeholder='Your Name'/>
                <input type="email" name='your_email' className="email" placeholder='Your Email' />
                <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://www.facebook.com/profile.php?id=100006301894741&mibextid=LQQJ4d"><img src={FacebookIcon} alt="facebook" className="link" /></a> 
                    <a href="https://www.youtube.com/channel/UCtJ-UnZK_P8pBT_jOE1-Bbg"><img src={YoutubeIcon} alt="youtube" className="link" /></a>
                    <a href="https://www.instagram.com/mnu_gour?igsh=dGN4Y3QweG81cnc4&utm_source=qr"><img src={InstagramIcon} alt="instagram" className="link" /></a>
                </div>
            </form>
        </div>
        
    </section>
  )
}

export default Contact
