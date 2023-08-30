import React from 'react';
import './ContactCenter.css';
import contactCenter1 from '../../images/title/title-1.png';
import contactCenter2 from '../../images/title/title-2.png';
import contactCenter3 from '../../images/title/title-3.png';
import contactCenter4 from '../../images/title/title-4.png';
import contactCenter5 from '../../images/title/title-5.png';
import contactCenter6 from '../../images/title/title-6.png';
import contactCenter7 from '../../images/title/title-7.png';
import contactCenter8 from '../../images/title/title-8.png';
// person 
import personImg from '../../images/person.png';
// personName 
import personName from '../../images/personName.png';
// Fav emergency icon
import graterThen from '../../images/emergencyIcon/greater-than-solid.svg';
import appointment from '../../images/emergencyIcon/calendar-check-solid.svg';
import soulDoctor from '../../images/emergencyIcon/user-md-solid.svg';
import location from '../../images/emergencyIcon/map-marker-alt-solid.svg';
import phone from '../../images/emergencyIcon/phone-alt-solid.svg';


const ContactCenter = () => {

    return (
        <div>
            <div className="contact-center">
                <div className="container">
                    <h1>Innovative healthcare and life sciences organizations leverage Talkdesk to manage their contact center.</h1>
                    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                        <div class="col">
                            <img src={contactCenter1} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter2} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter3} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter4} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter5} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter6} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter7} alt="" width="200px" />
                        </div>
                        <div class="col">
                            <img src={contactCenter8} alt="" width="200px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="person-info">
                <div className="container-fluid">
                    <div class="row g-2" className="info">
                        <div class="col-sm-12 col-md-4">
                            <img src={personImg} alt="" />
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <h1>Welcome To MediLink.
                                <br />
                                Central Hospital</h1>
                            <p>Mtandard dummy texr since when an unknown printer took a galley.MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam.'s standard dummy texr since when an unknown printer took a galley consetetur.</p>
                            <img src={personName} alt="" />
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="col g-0">
                                <div class="row-sm-12 row-md-12" className="emergency-icon">
                                    <h4>
                                        <img className="emergency-single" src={appointment} alt="" /> <small>Request Appoinment</small>
                                    </h4>
                                    <img className="emergency-single" src={graterThen} alt="" />
                                </div>
                                <div class="row-sm-12 row-md-12" className="emergency-icon">
                                    <h4>
                                        <img className="emergency-single" src={soulDoctor} alt="" /> <small>Find Doctors</small>
                                    </h4>
                                    <img className="emergency-single" src={graterThen} alt="" />
                                </div>
                                <div class="row-sm-12 row-md-12" className="emergency-icon">
                                    <h4>
                                        <img className="emergency-single" src={location} alt="" /> <small>Find Locations</small>
                                    </h4>
                                    <img className="emergency-single" src={graterThen} alt="" />
                                </div>
                                <div class="row-sm-12 row-md-12" className="emergency-icon">
                                    <h4>
                                        <img className="emergency-single" src={phone} alt="" /><small>Emergency Contact</small>
                                    </h4>
                                    <img className="emergency-single" src={graterThen} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCenter;