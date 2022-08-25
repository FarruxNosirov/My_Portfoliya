import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expereince">Expereince</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portifolio">Portifolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook className="footer_socials_icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <BsInstagram className="footer_socials_icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <BsTwitter className="footer_socials_icon" />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;EGATOR Tutrials . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
