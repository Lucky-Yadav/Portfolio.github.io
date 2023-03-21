import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        {/* <h5>Hey I'm</h5> */}

        <h3>Site under maintainence</h3>
        <h1>Lucky Yadav</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
