import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-social">
            <h3>Follow Us</h3>
                <a href="https://www.facebook.com"><FaFacebook /> </a>
                <a href="https://www.twitter.com"><FaTwitter /></a>
                <a href="https://www.instagram.com"><FaInstagram /></a>
                <a href="https://www.linkedin.com"><FaLinkedin /> </a>
            </div>

            <p>&copy; 2023 downtime. All rights reserved.</p>
            <Link to="/privacy">Privacy Policy</Link>
        </footer>
    );
};

export default Footer;
