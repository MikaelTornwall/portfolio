import React from 'react'
import ContactForm from './ContactForm'
import './styles/Contact.css'

const Contact = () => (
  <div>
  <h2 className="contact-header">Contact</h2>
  <div className="contact-card">
    <div>
      <p className="contact-font"><i className="contact-icon far fa-envelope"></i> mikael.tornwall@aalto.fi</p>
      <p className="contact-font"><a id="linkedin" href="https://www.linkedin.com/in/mikaeltornwall/" target="_blank" rel="noopener noreferrer"><i className="contact-icon fab fa-linkedin"></i> Connect on LinkedIn</a></p>
      <p className="contact-font">OR</p>
      <ContactForm />
    </div>
  </div>
  </div>
)

export default Contact
