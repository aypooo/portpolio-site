import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Works = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div ref={ref} className={`section-content main ${inView ? 'animate' : ''}`}>
    <div className="works">
      <h2>Works</h2>
      <p onClick={()=>window.open("https://github.com/aypooo/blog")}>https://github.com/aypooo/blog</p>
      <p onClick={()=>window.open("https://github.com/aypooo/web-market")}>https://github.com/aypooo/web-market</p>
    </div>
    </div>
  );
};

export default Works;