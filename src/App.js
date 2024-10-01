import React from 'react';
import './App.css';
import PersonalInfo from './components/personal-info.js'
import About from './components/about.js'
import Interests from './components/interests.js'


function App() {
  return (
    <div className="App container">
      <div className = "card">
        <PersonalInfo />
        <About />
        <Interests />
      </div>
    </div>
  );
}

export default App;
