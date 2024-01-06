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
                <p>
                    Placeholder for about me! lalala. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutMe;