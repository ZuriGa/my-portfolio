import React, { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import { Element, scroller } from 'react-scroll';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

Modal.setAppElement('#root');

const App = () => {
    const [showReturnButton, setShowReturnButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowReturnButton(true);
            } else {
                setShowReturnButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroller.scrollTo('navbar', {
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
                        <div className='section-container'>
                            <AboutMe />
                        </div>
                    </Element>
                    <Element name='projects'>
                        <div className='section-container'>
                            <Projects />
                        </div>
                    </Element>
                    <Element name='skills'>
                        <div className='section-container'>
                            <Skills />
                        </div>
                    </Element>
                </motion.div>
            </AnimatePresence>
            {showReturnButton && (
                <button className='return-button' onClick={scrollToTop}>Return to Top</button>
            )}
            <Footer />
        </div>
    );
};

export default App;
