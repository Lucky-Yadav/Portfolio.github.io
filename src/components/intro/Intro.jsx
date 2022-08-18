import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/lucky.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
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
          <p>I'm a Full-Stack developer located who enjoy's to create thoughtful yet beautiful websites with great user experience.
            <br/><br/>I'm interested in the whole Development Journey Like trying new things and building great projects. I love to write blogs and read books.
            <br/>I believe everything is an Art when you put your consciousness in it. <br /> <br />
            <b>HTML, CSS, JavaScript, React, Redux </b> etc. building everything from landing pages to APIs under the guidence of  
            <b> MASAI SCHOOL</b> .
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro