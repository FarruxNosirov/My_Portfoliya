import React from "react";

import "./Testimonials.css";

const data = [
  { id: 0, img_url: "/avatar1.jpg" },
  { id: 1, img_url: "/avatar2.jpg" },
  { id: 2, img_url: "/avatar3.jpg" },
  { id: 3, img_url: "/avatar4.jpg" },
];

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        {data.map((item) => {
          return (
            <article key={item.id} className="testimonial">
              <div className="client_avatar">
                <img src={item.img_url} alt="" />
              </div>
              <h5 className="client_name">Ernist Achiever</h5>
              <small className="client_review">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis laboriosam molestias accusantium ducimus sint pariatur
                itaque incidunt ab assumenda, adipisci quas ea voluptate culpa
                architecto eveniet repudiandae. Neque, beatae fugit?
              </small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
