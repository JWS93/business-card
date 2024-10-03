import React from 'react';
import './App.css';
import PersonalInfo from './components/personal-info'
import About from './components/about'
import Interests from './components/interests'
import Footer from './components/footer'



function App() {
  return (
    <div className="App container">
      <div className = "card">
        <PersonalInfo />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
