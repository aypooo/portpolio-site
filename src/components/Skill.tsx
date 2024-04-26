import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skill = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div ref={ref} className={`section-content ${inView ? 'animate' : ''}`}>
    <div className="skill">
      <h2>Skill</h2>
      <p>react</p>
      <p>javascript</p>
      <p>typescript</p>
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></img>
<br/>
      <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></img>
      <br/>
      <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"></img>
      <br/>
      <p>git</p>
    </div>
    </div>
  );
};

export default Skill;