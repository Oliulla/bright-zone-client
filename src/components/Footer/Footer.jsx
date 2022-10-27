import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer bg-dark text-white-50 mb-0 mt-5 px-2 py-5 d-flex justify-content-between justify-content-lg-around'>
            <div>
                <p>Get more</p>
                <p>Free plan</p>
                <p>All services</p>
                <p>Get premium</p>
                <p>Monthly plan</p>
                <p>Weekly plan</p>
            </div>
            <div>
                <p>Careers</p>
                <p>Blogs</p>
                <p>FAQ</p>
                <p>Supports</p>
                <p>Help</p>
                <p>Get app</p>
            </div>
            <div>
                <p>About us</p>
                <p>Contact us</p>
                <p>Privacy & Policy</p>
                <p>Settings</p>
                <p>Touch on Bright Zone</p>
                <p>Copyright © 2022 <Link to="/" className='text-info text-decoration-none'>Bright Zone</Link>, Inc.</p>
            </div>
        </div>
    );
};

export default Footer;