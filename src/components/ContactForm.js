import React from 'react'

class ContactForm extends React.Component {

  state = {
    name: "",
    email: "",
    message: ""
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = (event) => {
    event.preventDefault()

    const submission = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    this.setState({
      name: "",
      email: "",
      message: ""
    })

    console.log(submission)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label><input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
        <br />
        <label>Email: </label><input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
        <br />
        <br />
        <label>Write your message: </label>
        <br />
        <textarea name="message"
          rows="10"
          cols="50"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Send"
          />
      </form>
    )
  }
}

export default ContactForm
