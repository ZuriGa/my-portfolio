import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const AboutMe = () => {
    return (
        <section id='about-me' className='about-me-card'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>About Me</h2>
                <p><br/>
                    Hey there! I'm Zuri, a 29 years old with a passion for programming. Embarking on the coding journey has been a long-time dream. The dynamic world of programming and its endless possibilities have always fascinated me. Join me as I dive into this exciting adventure, uncovering the secrets of coding, and embracing the challenges that come my way.
                    <br/><br />
                    Welcome to my page!
                    <br /><br />
                    In my free time, you can find me exploring new technologies, working on interesting projects, or contributing to open-source. I believe in the power of technology to bring positive change, and I'm dedicated to continuous learning.
                </p>
                <div className="social-icons">
                    <a href='https://github.com/ZuriGa' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={30} />
                    </a>
                    <a href='https://www.linkedin.com/in/zurigallegos/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={30} />
                    </a>
                </div>
                <p>
                    Let's connect! Feel free to check out my <a href='https://github.com/ZuriGa' target='_blank' rel='noopener noreferrer'>GitHub</a> for the latest projects or connect with me on <a href='https://www.linkedin.com/in/zurigallegos/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutMe;