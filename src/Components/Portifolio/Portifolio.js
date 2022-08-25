import React from "react";
import "./Portifolio.css";

const data = [
  {
    id: 0,
    img_url: "/portfolio1.jpg",
  },
  {
    id: 1,
    img_url: "/portfolio2.jpg",
  },
  {
    id: 2,
    img_url: "/portfolio3.jpg",
  },
  {
    id: 3,
    img_url: "/portfolio4.jpg",
  },
  {
    id: 4,
    img_url: "/portfolio5.png",
  },
  {
    id: 5,
    img_url: "/portfolio6.jpg",
  },
];
const Portifolio = () => {
  return (
    <section id="">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={item.img_url} alt="" />
              </div>
              <h3>This is a portfolio iyem title</h3>
              <div className="portfolio_item_cte">
                <a
                  href="https://github.com/FarruxNosirov"
                  target="_blank"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
