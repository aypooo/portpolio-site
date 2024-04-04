import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skill = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div ref={ref} className={`main ${inView ? 'animate' : ''}`}>
    <div className="skill">
      <h2>Skill</h2>
      <p>react</p>
      <p>javascript</p>
      <p>typescript</p>
      <p>git</p>
    </div>
    </div>
  );
};

export default Skill;