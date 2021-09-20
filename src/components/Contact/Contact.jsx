import React, { Component } from "react";
// import { emailjs, init } from "emailjs-com";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    init("user_IXcvcUj68fqJHo8xUaZMq");
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    
    let templateParams = {
      from_name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    
    emailjs.send('service_ndaytgh', 'template_c8gbs9q', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    
    this.setState({
      name: "",
      email: "",
      message: "",
    });

  };

  render() {
    return (
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4 className="text-uppercase text-center">Contact</h4>
              <p className="text-center">Want to work on a project together?</p>
              <br />
              <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-md-6">
                  <label htmlFor="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="Text"
                    class="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div class="">
                  <label htmlFor="message" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="3"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-warning rounded-pill">
                    Contact me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
