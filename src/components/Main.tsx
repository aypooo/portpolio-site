import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Main = () => {
  const { ref, inView } = useScrollAnimation();
  return (
 <div ref={ref} className={`section-content main ${inView ? 'animate' : ''}`}>
    <div className="main">
      <p>프론트엔드 개발자 홍륜건</p>
      <p>PORTFOLIO</p>
    </div>
    </div>
  );
};

export default Main;