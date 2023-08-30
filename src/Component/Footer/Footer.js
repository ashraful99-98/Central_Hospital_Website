import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../images/social-icon/facebook-brands.svg';
import twitterIcon from '../images/social-icon/twitter-brands.svg';
import linkedinIcon from '../images/social-icon/linkedin-brands.svg';
import instagramIcon from '../images/social-icon/instagram-brands.svg';
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <div className="footer-manu">
                <div className="container">
                    <div className="footer-info">
                        <div className="favIcon">
                            <div className="icon">
                                <img className="single-icon" src={facebookIcon} alt="" />
                                <img className="single-icon" src={twitterIcon} alt="" />
                                <img className="single-icon" src={linkedinIcon} alt="" />
                                <img className="single-icon" src={instagramIcon} alt="" />
                            </div>
                            <p>© 2021 Talkdesk</p>
                        </div>
                        <div>
                            <div className="navlist">
                                <Link className="single-nav">Terms of Use</Link>
                                <Link className="single-nav">Privacy Policy</Link>
                                <Link className="single-nav">Terms of Service</Link>
                                <Link className="single-nav">Forward Looking Statement</Link>
                                <Link className="single-nav">Transparency in Supply Chains Statement</Link>
                            </div>
                            <p>388 Market Street, Suite 1300, San Francisco, CA 94111</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;