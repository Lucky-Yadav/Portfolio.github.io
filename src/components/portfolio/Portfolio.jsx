import React from 'react';
import IMG1 from '../../assets/swiggy.png';
import IMG2 from "../../assets/images/portfolio/Unsplash.png";


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
      link: "https://lucky-yadav.github.io/swiggy.com_clone.github.io/",
      github: "https://github.com/Lucky-Yadav/swiggy.com_clone.github.io",
    },
    {
      id: 2,
      title: "Unsplash Landing Page Clone",
      des: "This is Unsplash's Landing page for website,with photos download, add them to favourite and profile card features",
      img: IMG2,
      res: "Its feature includes - Drag and Drop search from which a user could search different wallpapers by just dragging or uploading image. ",
      teckStack: " React | Redux | Styled Components | Material UI",
      link: "https://unsplashnav.netlify.app/",
      github: "https://github.com/Parag-Tharani/Unsplash_clone",
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