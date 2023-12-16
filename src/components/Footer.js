import React from 'react';
import { Link } from 'react-router-dom';
import yourLogo from './images/logo.svg';

const Footer = () => {
    return (
        <footer>
          <div className="footer-content">
            <div className="footer-logo">
              <img src= {yourLogo} alt="Company Logo" />
            </div>
            <div className="footer-contact">
              <h3>Contact Information</h3>
              <p>Oulu University of Applied Sciences</p>
              <p>Yliopistokatu Street</p>
              <p>Oulu, Finland</p>
              <p>Phone: +358 41 487 5885</p>
              <p>Email: moeezk115@gmail.com</p>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <ul>
                <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h3>Subscribe to Our Newsletter</h3>
              <form action="#">
                <input type="email" placeholder="Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 downtime. All rights reserved.</p>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              
            </ul>
          </div>
        </footer>
    );
};

export default Footer;
