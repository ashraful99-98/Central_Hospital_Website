import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <div>
            <div className="login-form">
                <div className="container">
                    <div>
                        <h2>Create Account</h2>
                        <form onSubmit="">
                            <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                            <br />
                            <input className="mb-2" type="password" name="" id="" placeholder="Your Password" />
                            <br />
                            <input className="mb-2" type="password" name="" id="" placeholder="Re-enter Password" />
                            <br />
                            <input type="button" value="Submit" className="btn-primary rounded px-2 my-2" />
                        </form>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <div>-----------or---------</div>
                        <button onClick={signInUsingGoogle} className="btn-primary rounded px-2 my-2">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;