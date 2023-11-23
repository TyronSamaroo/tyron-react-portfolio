import React from 'react';
import { DiPython, DiJavascript1, DiReact, DiJava, DiAws } from 'react-icons/di';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const SkillsSection = () => (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill">
          <motion.div whileHover={{ scale: 1.1 }}>
            <DiPython className="skill-icon" />
          </motion.div>
          <h3>Python</h3>
        </div>
        <div className="skill">
          <motion.div whileHover={{ scale: 1.1 }}>
            <DiJavascript1 className="skill-icon" />
          </motion.div>
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <motion.div whileHover={{ scale: 1.1 }}>
            <DiReact className="skill-icon" />
          </motion.div>
          <h3>React</h3>
        </div>
        <div className="skill">
          <motion.div whileHover={{ scale: 1.1 }}>
            <DiJava className="skill-icon" />
          </motion.div>
          <h3>Java</h3>
        </div>
        <div className="skill">
          <motion.div whileHover={{ scale: 1.1 }}>
            <DiAws className="skill-icon" />
          </motion.div>
          <h3>AWS</h3>
        </div>
      </div>
    </div>
  );
export default SkillsSection;
