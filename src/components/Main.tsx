import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import VideoBackground from './VideoBackgroud';

const Main = () => {
  const { ref, inView } = useScrollAnimation();
  return (
 <div ref={ref} >
    <div className="main">
      <div className='main__content'>
        <p>FRONTEND</p>
        <p>PORTFOLIO</p>
        <VideoBackground/>
      </div>
    </div>
  </div>
  );
};

export default Main;