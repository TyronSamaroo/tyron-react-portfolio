import React from 'react';
import { DiGithub, DiApple, DiPython} from 'react-icons/di'
import './ConnectionSection.css';
import IconLinkSection from '../IconLinkSection/IconLinkSection';

const ConnectionSection = () => {
  const skills = [
    { icon: DiGithub, label:'Github', url: 'https://www.python.org/' },
    { icon: DiPython, label:'Linkedin', url: 'https://www.python.org/' },
  ]

  return <IconLinkSection title="Connection Section" items={skills}/>;
}
export default ConnectionSection;
