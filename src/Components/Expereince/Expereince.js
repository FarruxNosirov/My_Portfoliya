import React from "react";
import "./Expereince.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Expereince = () => {
  return (
    <section id="expereince">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container expereince_container">
        <div className="expereince_frontent">
          <h3 className="">Frontent Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Bootstrap </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expereince_backend"></div>
      </div>
    </section>
  );
};

export default Expereince;
