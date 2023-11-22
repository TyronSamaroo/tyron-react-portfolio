import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <motion.header
        className="header-content"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h1>Hello, I'm Tyron</h1>
        <p>Software Engineer | Web Developer | Tech Enthusiast</p>
      </motion.header>
      <motion.div className="profile-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img src="/tyron.jpeg" alt="Tyron Samaroo" className="profile-image" />
      </motion.div>
    </div>
  );
}

export default LandingPage;
