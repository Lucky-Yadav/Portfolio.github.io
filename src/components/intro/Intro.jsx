import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/lucky.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <ReactAudioPlayer src="./RabbaMeharKari.mp3" autoPlay></ReactAudioPlayer>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Around 9 months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed Assignments</small>
            </article>
          </div>
          <p>
            An independent and detail-oriented full-stack web developer with a
            specialization in MERN stack. enthusiastic to learn new things and
            always try to do my best in any work assigned and always tries to be
            appreciated as well-performer.
            <br />I believe everything is an Art when you put your consciousness
            in it. <br />
            <b>HTML, CSS, JavaScript, React, Redux </b> etc. building everything
            from landing pages to APIs under the guidence of
            <b> MASAI SCHOOL</b> .
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
