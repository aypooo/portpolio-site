import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Works from './components/Works';
import Main from './components/Main';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <div className="section">
        <Main/>
      </div>
      <div className="section">
        <Profile />
      </div>
      <div className="section">
        <Skill />
      </div>
      <div className="section">
        <Works />
      </div>

    </div>
  );
}

export default App;