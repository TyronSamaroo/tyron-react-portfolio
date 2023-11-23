import React from 'react';
import { DiGithub, DiLinkedin} from 'react-icons/di';
import { motion } from 'framer-motion';
import './IconLinkSection.css';

const IconLinkSection = ( { links, heading }) => (
    <div className='icon-link-container'>
        <h2>{heading}</h2>
        <div className='icon-link-grid'>
            {links.map((link, index) => (
                <a href={link.url} key={index} target='_blank' rel='noopener noreferrer'>
                    <div className='icon-link'>
                        <motion.div whileHover={{ scale: 1.1}}>
                            <link.icon className='icon'/>
                        </motion.div>
                        <h3>{link.name}</h3>
                    </div>
                </a>
            ))}
        </div>
    </div>
);
export default IconLinkSection;