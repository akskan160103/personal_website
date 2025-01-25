import React from 'react';
import '@/components/contact/contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        {/* Email */}

            <a href="mailto:contact@yujiva.com" className="contact-item">
                <ion-icon name="mail-outline" className='contact-icon'></ion-icon>
            </a>

        {/* Linkedlin */}

          
            <a href="https://www.linkedin.com/in/akskan/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <ion-icon name="logo-linkedin" className="contact-icon"></ion-icon>
            </a>

      </div>
    </section> 
  );
}

export default Contact;
