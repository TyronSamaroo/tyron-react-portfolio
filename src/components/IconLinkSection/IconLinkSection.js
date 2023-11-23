import React from 'react';
import { motion } from 'framer-motion';
import './IconLinkSection.css';

const IconLinkSection = ( { title, items }) => (
    <div className='icon-link-container'>
        <h2>{title}</h2>
        <div className='icon-link-grid'>
            {items.map((item, index) => (
                <a href={item.url} key={index} target='_blank' rel='noopener noreferrer'>
                    <div className='icon-link'>
                        <motion.div whileHover={{ scale: 1.1}}>
                            <item.icon className='icon'/>
                        </motion.div>
                        <h3>{item.name}</h3>
                    </div>
                </a>
            ))}
        </div>
    </div>
);
export default IconLinkSection;