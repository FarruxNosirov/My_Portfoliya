import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Me from "../../assets/me-about.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clents</h5>
              <small>20 Woeldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat
            dicta, quaerat nihil laudantium, eius assumenda magnam ullam
            mollitia repudiandae in repellendus! Iusto, aliquid? Quis adipisci
            magni sint hic nostrum?{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's a talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
