import React from 'react';
import { DiGithub, DiApple, DiPython} from 'react-icons/di'
import { FaLinkedin, FaGithubAlt} from 'react-icons/fa'
import './ConnectionSection.css';
import IconLinkSection from '../IconLinkSection/IconLinkSection';

const ConnectionSection = () => {
  const skills = [
    { icon: FaGithubAlt, label:'Github', url: 'https://github.com/TyronSamaroo' },
    { icon: FaLinkedin, label:'Linkedin', url: 'hhttps://www.linkedin.com/in/tyronsamaroo/' },
  ]

  return <IconLinkSection title="Connection Section" items={skills}/>;
}
export default ConnectionSection;
