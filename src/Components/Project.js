import React, { useState } from 'react';
import { motion } from 'framer-motion';
import galacticAgeImage from '../assets/galacticAge.png';
import currencyConverterImage from '../assets/currencyConverter.png';
import dateCalculatorImage from '../assets/dateCalculator.png';
import pizzaParlorImage from '../assets/pizzaParlor.png';

const imageMap = {
    'Super Galactic Age Calculator': galacticAgeImage,
    'Currency Exchanger': currencyConverterImage,
    'Weekday Calculator App': dateCalculatorImage,
    'Pizza Parlor': pizzaParlorImage,
};

const Project = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = (event) => {
        if (event.target.classList.contains('project-card')) {
        setIsExpanded(!isExpanded);
        }
    };



    return (
        <motion.div
            className={`project-card ${isExpanded ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(event) => handleToggleExpand(event)}
        >
            <div className='project-header'>
                <img src={imageMap[project.title]} alt={project.title} />
                <h3>{project.title}</h3>
            </div>
            {isExpanded && (
                <div className='project-details'>
                    <p>{project.description}</p>
                    <div>
                        <strong>Technology Used:</strong>
                        <ul>
                            {project.languages.split(',').map((language, index) => (
                                <li key={index}>{language.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    {project.githubLink && (
                        <p>
                            <strong>GitHub Link:</strong> <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>{project.githubLink}</a>
                        </p>
                    )}
                </div>
            )}
        </motion.div>
    );
};

export default Project;