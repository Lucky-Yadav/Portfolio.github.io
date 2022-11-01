import React from 'react';


const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/drive/folders/1lUeMl3Zs0LHTDctdZBTiXzxXwboK1EkJ?usp=sharing"
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