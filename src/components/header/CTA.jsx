import React from 'react';


const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1EJcK_mQpHEE90mT0FTRHEYdRLXet8EE3/view?usp=sharing"
        target={"_blank"}
        rel="noreferrer"
        className="btn"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}

export default CTA