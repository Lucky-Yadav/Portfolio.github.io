import React from 'react';
import IMG1 from '../../assets/swiggy.png';
import IMG2 from "../../assets/images/portfolio/Apollo.png";


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Swiggy Clone",
      img: IMG1,
      des: "Swiggy is an Indian online food ordering and delivery platform .",
      res: "My Area of Responsibility :- Create Signup/ Login Algo and also implemented Google oAuth with Mobile No. for Login and stored the data in JSON SERVER.",
      teckStack: " React | Redux | Styled Components |  Material UI ",
      link: "https://swiggy-web-clone.netlify.app/",
      github: "https://github.com/Lucky-Yadav/swiggy.com_clone.github.io",
    },
    {
      id: 2,
      title: "Apollo Clone",
      des: "Apollo Pharmacy is a Medical website , where you can find medicines, consult with doctors online or you can book appointment to meet doctors ofline..",
      img: IMG2,
      res: " Area of Responsibilty : Landing page with Navbar & footer ",
      teckStack: " HTML | CSS | Vanilla js",
      link: "https://apollo247-clone.netlify.app/",
      github: "https://github.com/Bhavisha2801/Apollo_Clone",
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <h3 className='portfolio__title'>{pro.title}</h3>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          
            <p>{pro.des}</p>
            <br/>
            <p>{pro.res}</p>
            <br/>
            <p>{pro.teckStack}</p>
          
          <div className="portfolio__item-cta">
            <a href={pro.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
            <a href={pro.link} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
          
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio