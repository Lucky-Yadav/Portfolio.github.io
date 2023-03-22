import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import Linkedinicon from "../../assets/linkedinicon.gif";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_srg7l5s",
        "template_rxshx4g",
        formRef.current,
        "W23y9PY1fgT6FmKFv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>luckyyadav8627@gmail.com</h5>
            <a href="mailto:luckyyadav8627@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-9485949413</h5>
            <a href="https://api.whatspp.com/send?phone=+919485949413ss">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <img
              src={Linkedinicon}
              alt="Loading..."
              className="contact__option-icon linkedin_icon"
            />
            <h4>Linkedin</h4>
            <h5>Lucky-yadav</h5>
            <a href="https://www.linkedin.com/in/lucky-yadav/">
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="text" placeholder="Email" name="user_email" required />
          <textarea
            placeholder="Message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
