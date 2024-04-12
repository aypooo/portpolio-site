import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Profile from './components/Profile';
import Works from './components/Works';
import Main from './components/Main';
import Skill from './components/Skill';
import useScrollAnimation from './hooks/useScrollAnimation'; // 훅 임포트

function App() {
  // 각 섹션의 inView 상태를 관리하기 위한 상태 변수
  const [currentSection, setCurrentSection] = useState('');

  // 각 섹션의 inView 상태 감지를 위한 훅 사용
  const mainAnimation = useScrollAnimation();
  const profileAnimation = useScrollAnimation();
  const skillAnimation = useScrollAnimation();
  const worksAnimation = useScrollAnimation();

  // 현재 활성화된 섹션을 감지하여 상태 업데이트
  useEffect(() => {
    if (mainAnimation.inView) setCurrentSection('main');
    else if (profileAnimation.inView) setCurrentSection('profile');
    else if (skillAnimation.inView) setCurrentSection('skill');
    else if (worksAnimation.inView) setCurrentSection('works');
  }, [mainAnimation.inView, profileAnimation.inView, skillAnimation.inView, worksAnimation.inView]);

  // 각 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className="navigation">
        <ul>
          <li className={currentSection === 'main' ? 'dot active' : 'dot'} data-title="Main" onClick={() => scrollToSection('main')}></li>
          <li className={currentSection === 'profile' ? 'dot active' : 'dot'} data-title="Profile" onClick={() => scrollToSection('profile')}></li>
          <li className={currentSection === 'skill' ? 'dot active' : 'dot'} data-title="Skill" onClick={() => scrollToSection('skill')}></li>
          <li className={currentSection === 'works' ? 'dot active' : 'dot'} data-title="Works" onClick={() => scrollToSection('works')}></li>
        </ul>
      </nav>
      
      <section id="main" className="section" ref={mainAnimation.ref}>
        <Main/>
      </section>
      <section id="profile" className="section" ref={profileAnimation.ref}>
        <Profile />
      </section>
      <section id="skill" className="section" ref={skillAnimation.ref}>
        <Skill />
      </section>
      <section id="works" className="section" ref={worksAnimation.ref}>
        <Works />
      </section>
    </div>
  );
}

export default App;
