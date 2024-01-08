import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                    <a href='https://github.com/ZuriGa' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={30} />
                    </a>
                    <a href='https://www.linkedin.com/in/zurigallegos/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={30} />
                    </a>
                    <p>&copy; 2024 Zuri Gallegos. All rights reserved.</p>
                </div>
        </footer>
    );
};

export default Footer;