import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';
import PersonalInfo from './components/personal-info.js'
import ProfileImage from './components/profile-image'

function App() {
  return (
    <div className="App container">
      <div className = "card">
        <ProfileImage />
        <PersonalInfo />
      </div>
    </div>
  );
}

export default App;
