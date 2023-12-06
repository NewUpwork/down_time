// Header.jsx
import React from 'react';
import "./styles/header.css";
import { Link } from 'react-router-dom';
import yourLogo from './images/logo.svg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-section">
            <Link to="/">
                    <h1>
                    <img src={yourLogo} alt="Downtime Logo" className ="logo" />
                    </h1>
                </Link>
            </div>
            <div className="center-section">
                <input type="text" placeholder="Search..." className="search-bar" />
            </div>
            <div className="right-section">
            <Link to="/login">
                <button className="button">Login</button>
                </Link>
                <Link to="/register">
                <button className="button1">Signup</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
