import React from 'react';
import contactMainImg from '../../images/contact.jpg';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactInfo.css';
import { Link } from 'react-router-dom';
const ContactInfo = () => {
    const userSoul = <FontAwesomeIcon icon={faUser} />
    const clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div>
            <div className="container">
                <div class="row g-3 my-4">
                    <div class="col-sm-6 col-md-9 overflow-hidden">
                        <img src={contactMainImg} alt="" />
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div className="column g-2">
                            <div className="row-md-12 bg-primary text-light p-2 mb-4">
                                <h1>{userSoul}</h1>
                                <p>I'M LOOKING FOR A CONSULTANT</p>
                            </div>
                            <div className="row-md-12 bg-warning text-light p-2">
                                <h1>{clock}</h1>
                                <p>SCHEDULE APPOINTMENT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;