import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 downtime. All rights reserved.</p>
            <Link to="/privacy">Privacy Policy</Link>


        </footer>
    );
};

export default Footer;
