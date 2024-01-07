import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id='about-me'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>About Me</h2>
                <p><br/>
                    Hey there! I'm Zuri, a 29 years old with a passion for programming. Embarking on the coding journey has been a long-time dream. The dynamic world of programming and its endless possibilities have always fascinated me. Join me as I dive into this exciting adventure, uncovering the secrets of coding, and embracing the challenges that come my way.
                    <br/>
                    Welcome to my page!
                </p>
            </motion.div>
        </section>
    );
};

export default AboutMe;