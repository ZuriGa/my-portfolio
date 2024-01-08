import React from 'react';
import { motion } from 'framer-motion';

const skillsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <section id='skills' className='skills-card'>
            <motion.section
                id='skills'
                initial='hidden'
                animate='visible'
                variants={skillsVariants}
            >
                <h2>Technical Skills</h2>
                <div className='skills-list'>
                    <motion.div variants={skillsVariants}>
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <h3>Frameworks & Libraries</h3>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Bootstrap</li>
                            <li>Webpack</li>
                        </ul>
                        <h3>Database Management</h3>
                        <ul>
                            <li>Firebase</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>
        </section>
    );
};

export default Skills;

