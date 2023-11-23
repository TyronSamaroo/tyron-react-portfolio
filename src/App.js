import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ConnectionSection from './components/ConnectionSection/ConnectionSection';
import Biography from './components/Biography/Biography';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <Biography/>
      <SkillsSection />
      <ConnectionSection />
    </div>
  );
}

export default App;
