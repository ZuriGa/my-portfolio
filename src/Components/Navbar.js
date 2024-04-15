import React, { useState } from 'react';
import logo from './../assets/Z (1).png';
import { Link } from 'react-scroll';
import ContactMe from './ContactMe';


const Navbar = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    
    const openContactMe = () => {
        setIsContactModalOpen(true);
    };

    const closeContactMe = () => {
        setIsContactModalOpen(false);
    };

    return (
        <nav className='navbar'>
            <img src={logo} alt='Z logo' className='logo'/>
            <div className='appMenu'>
                <Link to='about-me' className='appMenuListItem'>About</Link>
                <Link to='projects' className='appMenuListItem'>Projects</Link>
                <Link to='skills' className='appMenuListItem'>Skills</Link>
            </div>
            <button className='appMenuBtn' onClick={openContactMe}>Contact Me</button>
            <ContactMe isOpen={isContactModalOpen} onRequestClose={closeContactMe} />
        </nav>
    );
};

export default Navbar;