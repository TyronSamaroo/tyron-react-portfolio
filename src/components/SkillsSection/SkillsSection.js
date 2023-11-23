import React from 'react';
import { DiPython, DiJavascript1, DiReact, DiJava, DiAws, DiJavascript } from 'react-icons/di';
import { motion } from 'framer-motion';
import './SkillsSection.css';
import IconLinkSection from '../IconLinkSection/IconLinkSection';

const SkillsSection = () => {
  const skills = [
    { icon: DiPython, label:'Python', url: 'https://www.python.org/' },
    { icon: DiJavascript, label:'JavaScript', url: 'https://www.python.org/' },
  ]

  return <IconLinkSection title="Technical Skill Section" items={skills}/>;
}
export default SkillsSection;
