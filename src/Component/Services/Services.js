import React, { useEffect, useState } from 'react';
// services background

import eyes from '../images/medical/eye-p.png';
import dental from '../images/medical/dental-care-p.png';
import cardio from '../images/medical/cardiogram1.png';
import medicine from '../images/medical/medicine-p.png';
// doctor 
import doctor1 from '../images/doctor/doctor-1.jpg';
import doctor2 from '../images/doctor/doctor-2.jpg';
// social icon 
import facebookIcon from '../images/social-icon/facebook-brands.svg';
import twitterIcon from '../images/social-icon/twitter-brands.svg';
import linkedinIcon from '../images/social-icon/linkedin-brands.svg';
import instagramIcon from '../images/social-icon/instagram-brands.svg'

import './Services.css';
import SingleService from './singleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="our-services">
                <h6 className="text-primary">SERVICES</h6>
                <h1 className="services-header">OUR Services.</h1>
                <button className="btn btn-primary">WATCH VIDEO</button>
            </div>

            <div className="all-services">
                <div class="container overflow-hidden">
                    <div className="single-services">
                        <h6 className="text-primary">Articles</h6>
                        <h1 className="pb-4">Our All Services</h1>
                        <div class="row row-cols-1 row-cols-md-2 g-4">

                            {
                                services.map(service => <SingleService
                                    key={service.id}
                                    service={service}></SingleService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="medical">
                <div className="container">
                    <div className="medical-info">
                        <h6 className="text-primary">Departments</h6>
                        <h1>Our Medical Services</h1>
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100 p-4">
                                    <din className="medical-image">
                                        <img className="medical-img" src={eyes} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Eye Care</h5>
                                        <p class="card-text">Horem ipsum dolor sitter amete consectetuer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-4">
                                    <din className="medical-image">
                                        <img className="medical-img" src={dental} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Dental Care</h5>
                                        <p class="card-text">ipsum dolor sitter amete consectetuer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-4">
                                    <din className="medical-image">
                                        <img className="medical-img" src={cardio} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Orthopedic</h5>
                                        <p class="card-text">dolor sitter amete consectetuer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-4">
                                    <din className="medical-image">
                                        <img className="medical-img" src={medicine} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Medicine</h5>
                                        <p class="card-text">Horem sitter amete consectetuer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="doctor">
                <div className="container">
                    <div className="doctor-info">
                        <h6 class="text-primary">Meet Our Team</h6>
                        <h1 class="mb-4">Specialist Doctors</h1>
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100 p-4 border-3 border-light">
                                    <din>
                                        <img class="img-thumbnail rounded-circle border-2" src={doctor2} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Dr. Nadim Kamal</h5>
                                        <p class="card-text">MBBS, M.D of Medicine</p>
                                        <p class="card-text text-primary">BDS, FCPS (Hons), PhD (Japan)</p>
                                        <div className="icon">
                                            <img className="single-icon" src={facebookIcon} alt="" />
                                            <img className="single-icon" src={twitterIcon} alt="" />
                                            <img className="single-icon" src={linkedinIcon} alt="" />
                                            <img className="single-icon" src={instagramIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-4 border-3 border-light">
                                    <din>
                                        <img class="img-thumbnail rounded-circle border-2" src={doctor1} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Dr. Tina Rahman</h5>
                                        <p class="card-text">MBBS, M.D of Medicine</p>
                                        <p class="card-text text-primary">BDS, FCPS (Hons), PhD (Japan)</p>
                                        <div className="icon">
                                            <img className="single-icon" src={facebookIcon} alt="" />
                                            <img className="single-icon" src={twitterIcon} alt="" />
                                            <img className="single-icon" src={linkedinIcon} alt="" />
                                            <img className="single-icon" src={instagramIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-4 border-3 border-light">
                                    <din>
                                        <img class="img-thumbnail rounded-circle border-2" src={doctor1} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Dr. Tina Rahman</h5>
                                        <p class="card-text">MBBS, M.D of Medicine</p>
                                        <p class="card-text text-primary">BDS, FCPS (Hons), PhD (Japan)</p>
                                        <div className="icon">
                                            <img className="single-icon" src={facebookIcon} alt="" />
                                            <img className="single-icon" src={twitterIcon} alt="" />
                                            <img className="single-icon" src={linkedinIcon} alt="" />
                                            <img className="single-icon" src={instagramIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-4 border-3 border-light">
                                    <din>
                                        <img class="img-thumbnail rounded-circle border-2" src={doctor2} alt="" />
                                    </din>
                                    <div class="card-body">
                                        <h5 class="card-title">Dr. Nadim Kamal</h5>
                                        <p class="card-text">MBBS, M.D of Medicine</p>
                                        <p class="card-text text-primary">BDS, FCPS (Hons), PhD (Japan)</p>
                                        <div className="icon">
                                            <img className="single-icon" src={facebookIcon} alt="" />
                                            <img className="single-icon" src={twitterIcon} alt="" />
                                            <img className="single-icon" src={linkedinIcon} alt="" />
                                            <img className="single-icon" src={instagramIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;