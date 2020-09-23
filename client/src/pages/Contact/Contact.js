import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import "./contact.css";
// eslint-disable-next-line
import image from "../../images/contact.png";
// import MapContainer from "../../components/MapContainer";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    message: "",
    email: "",
    sent: false,
    error: false
  });

  const { name, email, message, sent, error } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const formSubmit = async e => {
    e.preventDefault();
    setContact({ sent: true });

    const form = await axios.post("/api/send", { name, email, message });
    console.log(form);

    resetForm();
  };

  const resetForm = () => {
    setContact({
      name: "",
      message: "",
      email: "",
      sent: false,
      error: false
    });
  };

  return (
    <Fragment>
      <div className="containers">
        <div className="row m-1">
          <div className="col-sm-12 mx-1">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className=" contact_cont">
          <div className=" contact-us">
            <p>
              We'd love to hear about your progress, help with any questions, or
              just hang out and get to know you! And don't forget to follow us
              on social media for the latest fitness tip and events
            </p>
            <form
              className="contact-form cust-form"
              onSubmit={formSubmit}
              method="POST"
              action="send"
            >
              <div>
                <label className="message-name" htmlFor="message-name">
                  Name
                </label>
                <input
                  onChange={onChange}
                  name="name"
                  className="message-name cpYcEZ border-bottom"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                />
              </div>

              <div>
                <label className="message-email" htmlFor="message-email">
                  Email
                </label>
                <input
                  onChange={onChange}
                  name="email"
                  className="message-email cpYcEZ border-bottom"
                  type="email"
                  placeholder="johndoe@email.com"
                  required
                  value={email}
                />
              </div>

              <div>
                <label className="message" htmlFor="message-input">
                  Message
                </label>
                <textarea
                  onChange={onChange}
                  name="message"
                  className="message-input eJFNDT border-bottom"
                  type="text"
                  placeholder="Please write your message here"
                  value={message}
                  required
                />
              </div>

              <div className="button-container">
                <button type="submit" className="button button-primary ibSQGl">
                  {sent === false ? "Send Message" : "Sending Message!"}
                </button>
                {error === true ? (
                  <small>There was a problem sending your message</small>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>

          <div className=" contact-us ">
            {/* <MapContainer /> */}
            <img
              src={image}
              className="img-fluid mb-1"
              alt="Class Location in Celebration"
            />
            <div className="information">
              <div className="mb-3">
                <i className="fa fa-map" aria-hidden="true"></i> 219 Celebration
                Blvd, Celebration, Florida 34747
              </div>

              <div>
                <a href="tel:3212786523">
                  <i className="fa fa-phone" aria-hidden="true"></i> (321)
                  278-6523
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:rcfit7@gmail.com"
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  rcfit7@gmail.com
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/rcfit7/?hl=en"
                  className="text-dark"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
                  Instagram
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/RCFit7/"
                  className="text-dark"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>{" "}
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
