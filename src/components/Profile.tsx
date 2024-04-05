import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Profile = () => {

  const { ref, inView } = useScrollAnimation();
  return (
    <div ref={ref} className={`section-content main ${inView ? 'animate' : ''}`}>
      <div className="profile">
        <h2>Profile</h2>
        <h4>홍륜건</h4> 
        <p>프론트엔드 개발자</p>
        <p>배우며 사는 삶이 인생의 목표입니다</p>
        <h3>contact</h3>
        git: <span onClick={()=>window.open("https://github.com/aypooo")}>https://github.com/aypooo</span>
        <br/>
        email: moment0105@gmail.com
      </div>
    </div>
  );
};

export default Profile;