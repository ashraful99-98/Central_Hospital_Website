import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PatientExperience from './Patient-Exprience/PatientExperience';
import Service from './Service/Service';
import Slider from './Slider/Slider';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Slider></Slider>

            <div className="container">
                <div className="services">
                    <h1>Our Services</h1>
                    <p>Howard County General Hospital combines the convenience of a full range of hospital and wellness services, more than 1000 affiliated doctors in nearly 100 clinical specialties, award winning clinical excellence and membership in Johns Hopkins Medicine, one of the country’s premier academic medical systems.  All of this is delivered in some of the newest health care facilities in the region designed for the comfort and convenience of our patients and their families.</p>
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}></Service>)
                        }
                    </div>
                    <div className="browse-div">
                        <NavLink to="/services" className="browse-btn">ALL SERVICES</NavLink>
                    </div>
                </div>
            </div>

            <PatientExperience></PatientExperience>
        </div>
    );
};

export default Home;