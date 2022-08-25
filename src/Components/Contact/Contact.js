import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "emailjs-com";

import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u2gmgik",
      "template_avkqon8",
      form.current,
      "b-aHqMa_-7czUgoJ5"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>farruxjonnsoirov777@gmail.com</h5>
            <a href="mailto:farruxjonnosirov777@gmail.com">Sned a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenge</h4>
            <h5>farruxjonnsoirov777@gmail.com</h5>
            <a href="https://m.me/farrux.nosirov" target="_blank">
              Sned a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>farruxjonnsoirov777@gmail.com</h5>
            <a href="https://www.whatsapp.com/" target="_blank">
              Sned a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="messege"
            rows="7"
            placeholder="Your Messege"
            required
          ></textarea>
          <button className="btn btn-primary">Send Messege</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
