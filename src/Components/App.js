import React from 'react';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import Projects from './Projects';
import { Element, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';


const App = () => {
    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 500,
            delay: 0,
            smooth: true,
        });
    };
    return (
        <div>
            <Navbar />
            <AnimatePresence mode='wait'>
                <motion.div key='content'>
                    <Element name='about-me'>
                        <AboutMe />
                    </Element>
                </motion.div>
            </AnimatePresence>
        </div>

    );
};

export default App;
