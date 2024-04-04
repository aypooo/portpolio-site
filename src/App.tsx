import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Works from './components/Works';
import Main from './components/Main';
import Skill from './components/Skill';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  const { ref, inView } = useScrollAnimation();
  return (
    <div className="App">
      <section className="section">
        <Main/>
      </section>
      <section className="section">
        <Profile />
      </section>
      <section className="section">
        <Skill />
      </section>
      <section className="section">
        <Works />
      </section>

    </div>
  );
}

export default App;