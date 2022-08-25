import React from "react";
import CTA from "./CTA";
import "./header.css";
import MeImg from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container container_header">
        <h5>Hello I'm</h5>
        <h1>Farrux Nosirov</h1>
        <h5 className="text-light ">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MeImg} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
