import React from 'react';
import './Footer.css';
import { assets } from '../../toyAssets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>URMĂREȘTE-NE PE SOCIAL MEDIA
            pentru a fi la curent cu cele mai noi postări publicate, discuții sau articole postate pe blog.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+40766352948</li>
                <li>contact@dkidsprof.com</li>
            </ul>

        </div>
        
     </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 KidsToys - All Right Reserved</p>


    </div>
  );
}

export default Footer;
