import React from 'react';
import patientExparience from '../../images/the-patient.jpg';
import healthCareImg from '../../images/healthcare.png'
import './PatientExperience.css';

const PatientExperience = () => {
    return (
        <div>
            <div class="container">
                <div className="the-patient">
                    <div className="patient-info">
                        <h1>The patient experience revolution.</h1>
                        <p>90% of provider organizations say that their contact centers will play an integral role in driving great patient experiences in the next two years.</p>
                        <button className="patient-btn">Read The Report</button>
                    </div>
                    <div className="patient-image-div">
                        <img src={patientExparience} alt="" className="patient-img" />
                    </div>
                </div>
            </div>
            <div class="container">
                <div className="health-care">
                    <div className="health-care-img">
                        <img src={healthCareImg} alt="" />
                    </div>
                    <div className="health-care-info">
                        <h1>Reimagine the patient experience.</h1>
                        <p>Patients expect more: <big className="bold">96%</big> of patients surveyed report that poor customer service is their <big className="bold">#1</big> complaint and <big className="bold">51%</big> of healthcare consumers cited convenience as the most important factor informing their healthcare decision-making.With Talkdesk, healthcare providers can improve customer satisfaction and deliver more convenience.</p>
                        <button className="health-care-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientExperience;