import React from 'react';
import memberImg from '../../images/healthcare-2.jpg';
import PersonalizeImg from '../../images/healthcare-3.jpg';
import PrivacyImg from '../../images/healthcare-4.jpg';
import './Member.css';

const Member = () => {
    return (
        <div>
            <div className="container">
                {/* Build Member relationships  */}
                <div className="member">
                    <div className="member-info">
                        <h1>Build trusted member relationships.</h1>
                        <p>Payers want to empower members with quality choices, lower costs and convenience, while improving health outcomes, improving profitability, reducing churn, and enhancing customer satisfaction.Talkdesk is your primary engagement point for building trusted relationships.</p>
                        <button className="health-care-btn">Learn More</button>
                    </div>
                    <div className="member-img">
                        <img src={memberImg} alt="" />
                    </div>
                </div>
            </div>
            {/* Personalize Provider  */}
            <div className="container">
                <div className="member">
                    <div className="member-img">
                        <img src={PersonalizeImg} alt="" />
                    </div>
                    <div className="member-info">
                        <h1>Personalize provider interactions.</h1>
                        <p>In the era of personalized medicine, patients expect better outcomes and improved access to care.Talkdesk brings actionable insights into live and automated touchpoints, helping personalize interactions between healthcare providers, patients, and caregivers to ensure a better experience.</p>
                        <button className="health-care-btn">Request Demo</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="member">
                    <div className="member-info">
                        <h1>Ensure privacy and compliance.</h1>
                        <p>Security, privacy, and regulatory compliance are essential in healthcare.
                            <br />
                            Talkdesk applies the most rigorous safeguards and is the only contact center solution provider to offer a 100% uptime SLA.
                            <br />
                            Talkdesk Healthcare Experience Cloud™ ensures end-to-end data encryption, HIPAA compliance for handling Protected Health Information (PHI), and meets international data regulations such as GDPR and CCPA.
                        </p>
                        <button className="health-care-btn">REVIEW OUR SECURITY CHECKLIST</button>
                    </div>
                    <div className="member-img">
                        <img src={PrivacyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;