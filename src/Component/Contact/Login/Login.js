import React from 'react';
import { Link } from 'react-router-dom';
import ambulance from '../../images/ambulance.jpg';
import useFirebase from '../../../hooks/useFirebase';


import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <div className="login-form">
                <div className="container">
                    <div class="row g-3 my-4">
                        <div class="col-sm-6 col-md-8">
                            <div class="row g-3 bg-light p-2">
                                <div class="col-sm-6 col-md-6">
                                    <div className="small-info">
                                        <h6>CENTRAL HOSPITAL</h6>
                                        <small>Plot 15, Road 71,</small>
                                        <small>Gulshan, Dhaka-1212</small>
                                        <small>Bangladesh</small>
                                        <br />
                                        <small>Tel: +88 02 8836444, +88 02 8836000</small>
                                        <small>Fax: +88 02 8836446</small>
                                        <small> info@uhlbd.com</small>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6">
                                    <div className="contact-info">
                                        <h5>WRITE TO US</h5>
                                        <div class="row g-3">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="First name*" aria-label="First name" />
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Last name*" aria-label="Last name" />
                                            </div>
                                            <div class="col-12">
                                                <input type="text" class="form-control" placeholder="Subject*" aria-label="Subject" />
                                            </div>
                                            <div class="col-12">
                                                <input type="text" class="form-control" placeholder="Write Your Message" aria-label="Write Your Message" />
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                        <p> Are you new to Central Hospital? <Link to="/register">Create Account</Link></p>
                                        <div>-------------or-------------</div>
                                        <button
                                            className="btn-primary rounded px-2 my-2"
                                            onClick={signInUsingGoogle}
                                        >Google Sign In
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 d-flex">
                            <img class=" h-50 overflow-hidden" src={ambulance} alt="" />
                            <div className="small-text bg-light h-50">
                                <p> <small>EMERGENCY? CALL AMBULANCE</small></p>
                                <p><small>Phone: +880 1914 001234</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;