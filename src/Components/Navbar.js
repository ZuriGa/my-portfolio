import React from 'react';
import logo from './../assets/logoZ.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const navbarStyle = {
        background: 'linear-gradient(to right, #e66465, #9198e5)',
    };
    
    return (
        <nav className='navbar'>
            <img src={logo} alt='Z logo' className='logo'/>
            <div className='appMenu'>
                <Link to='app' className='appMenuListItem'>Home</Link>
                <Link to='about-me' className='appMenuListItem'>About</Link>
                <Link to='projects' className='appMenuListItem'>Projects</Link>
                <Link to='skills' className='appMenuListItem'>Skills</Link>
            </div>
            <button className='appMenuBtn'>Contact Me</button>
        </nav>
    )
}

export default Navbar;