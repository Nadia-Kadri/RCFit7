import React from "react";
import API from "../../utils/contactAPI";
import { Link } from "react-router-dom";
import "./contact.css";
import image from "../../images/contact.png"
import MapContainer from "../../components/MapContainer";

class Contact extends React.Component {
  state = {
    name: "",
    message: "",
    email: "",
    buttonText: "Send Message",
    sent: false,
    result: "",
    error: ""
  };

  formSubmit = e => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending"
    });

    let mailer = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    API.send({ mailer })
      .then(res => {
        if (res.data.message) {
          this.setState(
            { sent: true, result: res.data.message },
            this.resetForm()
          );
        } else {
          this.setState({ error: "Message did not send." });
        }
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  render() {
    return (
      <React.Fragment>

        <div className="container-fluid">
          <div className="row m-1">
            <div className="col-sm-12">
              <h1>Contact Us</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-5 mr-5">
              <p>
                We'd love to hear about your progress, help with any questions,
                or just hang out and get to know you! And don't forget to follow
                us on social media for the latest fitness tip and events
              </p>
              <form
                className="contact-form cust-form"
                onSubmit={e => this.formSubmit(e)}
                method="POST"
                action="send"
              >
                <div>
                  <label className="message-name" htmlFor="message-name">
                    Your Name
                  </label>
                  <input
                    onChange={e => this.setState({ name: e.target.value })}
                    name="name"
                    className="message-name cpYcEZ border-bottom"
                    type="text"
                    placeholder="Your Name"
                    value={this.state.name}
                  />
                </div>

                <div>
                  <label className="message-email" htmlFor="message-email">
                    Your Email
                  </label>
                  <input
                    onChange={e => this.setState({ email: e.target.value })}
                    name="email"
                    className="message-email cpYcEZ border-bottom"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={this.state.email}
                  />
                </div>

                <div>
                  <label className="message" htmlFor="message-input">
                    Your Message
                  </label>
                  <textarea
                    onChange={e => this.setState({ message: e.target.value })}
                    name="message"
                    className="message-input eJFNDT border-bottom"
                    type="text"
                    placeholder="Please write your message here"
                    value={this.state.message}
                    required
                  />
                </div>

                <div className="button-container">
                  <button
                    type="submit"
                    className="button button-primary ibSQGl"
                  >
                    {this.state.buttonText}
                  </button>
                  {this.state.result ? <small>{this.state.result}</small> : ""}
                </div>
              </form>
            </div>

            <div className="col-xl-6">
              <img src={image} className="img-fluid" /><br />

              <Link to="https://www.instagram.com/rcfit7/?hl=en">
                <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
                <br />
              </Link>
              <Link to="https://www.facebook.com/RCFit7/">
                <i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook
              </Link>
              <div><i className="fa fa-map" aria-hidden="true"></i> 219 Celebration Blvd, Celebration, Florida 34747</div>
              <div><i className="fa fa-phone" aria-hidden="true"></i> (321) 278-6523</div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i> rcfit7@gmail.com</div>
            </div>

          </div>

          {/* <MapContainer /> */}

        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
