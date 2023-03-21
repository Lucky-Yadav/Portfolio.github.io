import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { VscProject } from "react-icons/vsc";
// import { RiServiceLine } from 'react-icons/ri';
// import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiContactsBookLine } from "react-icons/ri";

import "./topbar.css";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [stickynav, setstickynav] = useState("true");

  var timeout;

  document.onmousemove = function () {
    if (timeout <= 5000) {
        setstickynav("false")
      }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setstickynav("true");
    }, 8000);
  };
  document.onscroll = function () {
    if (timeout <= 5000) {
      setstickynav("false");
    }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setstickynav("true");
    }, 8000);
  };

  return (
    <>
      <nav
        onMouseEnter={() => setstickynav("true")}
        onMouseLeave={() => setstickynav("false")}
        className="navb"
      >
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <p className="p2">HOME</p>
          <AiOutlineHome size={25} />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <p className="p2">ABOUT</p>
          <AiOutlineUser size={25} />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <p className="p2">SKILLS</p>
          <BiBook size={25} />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <p className="p2">PROJECTS</p>
          <VscProject size={25} />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <p className="p2">Contact</p>
          <RiContactsBookLine size={25} />
        </a>
      </nav>
      <div className={stickynav === "false" ? " stickynav " : "hidden"}>
        <nav className="jss1">
          <a
            href="#home"
            className={activeNav === "#home" ? "active jssb" : "jssb"}
          >
            <AiOutlineHome size={15} />
            <p className="p1">HOME</p>
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active jssb" : "jssb"}
          >
            <AiOutlineUser size={15} />
            <p className="p1">ABOUT</p>
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active jssb" : "jssb"}
          >
            <BiBook size={15} />
            <p className="p1">SKILLS</p>
          </a>
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active jssb" : "jssb"}
          >
            <VscProject size={15} />
            <p className="p1">PROJECTS</p>
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active jssb" : "jssb"}
          >
            {" "}
            <RiContactsBookLine size={15} />
            <p className="p1">Contact</p>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Topbar;
