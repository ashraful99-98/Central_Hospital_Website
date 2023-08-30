import React from 'react';
import './Appointment.css';
import care1 from '../../images/care/care1.png';
import care2 from '../../images/care/care2.png';
import care3 from '../../images/care/care3.png';
import care4 from '../../images/care/care4.png';

const Appointment = () => {
    return (
        <div>
            <div className="appointment">
                <div className="container">
                    <div className="appointment-here">
                        <h4>Need a Doctor for Check-up?</h4>
                        <h1>Just Make An Appointment & You're Done!</h1>
                        <button className="appointment-btn">Make an Appointment</button>
                    </div>
                </div>
            </div>
            <div className="healthy">
                <div className="container">
                    <div className="health-info">
                        <h5 class="text-primary">Working Process</h5>
                        <h1 class="mb-3">How It Helps You Stay Healthy</h1>
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100 p-2 border-2 border-primary">
                                    <img class="img-thumbnail rounded-circle border-2 border-primary" src={care1} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">Consultation</h5>
                                        <p class="card-text">Horem ipsum dolor sitter amete consectetuer adipis elit</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 border-2 border-primary">
                                    <img class="img-thumbnail rounded-circle border-2 border-primary" src={care2} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">Consultation</h5>
                                        <p class="card-text">Horem ipsum dolor sitter amete consectetuer adipis elit</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 border-2 border-primary">
                                    <img class="img-thumbnail rounded-circle border-2 border-primary" src={care3} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">Highest Quality</h5>
                                        <p class="card-text">Horem ipsum dolor sitter amete consectetuer adipis elit</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 border-2 border-primary">
                                    <img class="img-thumbnail rounded-circle border-2 border-primary" src={care4} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">Always Smiling</h5>
                                        <p class="card-text">Horem ipsum dolor sitter amete consectetuer adipis elit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="speciality">
                <div className="container">

                </div>
            </div>
        </div>
    );
};

export default Appointment;