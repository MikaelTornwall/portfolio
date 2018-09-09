import React from 'react';
import './styles/Contact.css'

const Contact = () => (
  <div>
  <h2 className="contact-header">Contact</h2>
  <div className="contact-card">
    <div>
      <p className="contact-font"><i className="contact-icon far fa-envelope"></i> mikael.tornwall@aalto.fi</p>
      <p className="contact-font"><a id="linkedin" href="#"><i className="contact-icon fab fa-linkedin"></i></a> Connect on LinkedIn</p>
    </div>
  </div>
  </div>
)

export default Contact
