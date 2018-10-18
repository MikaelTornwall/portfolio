import React from 'react';
import './styles/Contact.css'

const Contact = () => (
  <div>
  <h2 className="contact-header">Contact</h2>
  <hr />
  <div className="contact-card">
    <div>
      <p className="contact-font"><i className="contact-icon far fa-envelope"></i> mikael.tornwall@aalto.fi</p>
      <p className="contact-font"><a id="linkedin" href="https://www.linkedin.com/in/mikaeltornwall/" target="_blank" rel="noopener noreferrer"><i className="contact-icon fab fa-linkedin"></i></a> Connect on LinkedIn</p>
      <p className="contact-font">OR</p>
      <form>
        <label>Name: </label><input type="text" name="name" />
        <br />
        <label>Email: </label><input type="email" name="email" />
        <br />
        <label>Write your message: </label>
        <br />
        <textarea name="message"
          rows="10"
          cols="50"
        />
        <br />
        <input type="submit" name="submit" value="Send" />
      </form>
    </div>
  </div>
  </div>
)

export default Contact
