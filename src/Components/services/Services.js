import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Disign</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
          {/* <h3>UI/UX Disign</h3> */}
        </article>
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Disign</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Disign</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
