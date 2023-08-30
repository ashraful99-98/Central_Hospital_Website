import React from 'react';
import './Support.css';
import cx1 from '../../images/cxStrateg.png';
import cx2 from '../../images/cxEnablement.png';
import cx3 from '../../images/cxSuccess.png';

const Supports = () => {
    return (
        <div>
            <div className="mambers">
                <div className="container">
                    <div className="member">

                        <div className="member-info">
                            <h1>CX Strategy.</h1>
                            <p>Talkdesk partners with you to define your ideal future state, translating it into an actionable plan and a compelling business case complete with recommendations and investment analysis.</p>
                            <button className="health-care-btn">Learn More</button>
                        </div>
                        <div className="member-img">
                            <img src={cx1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mambers-sec">
                <div className="container">
                    <div className="member">
                        <div className="member-img">
                            <img src={cx2} alt="" />
                        </div>
                        <div className="member-info">
                            <h1>CX Enablement.</h1>
                            <p>The next step in the business transformation journey is to leverage the people, processes, and technologies to realize a best-in-class CX. This ranges from business consulting services that advise on contact center best practices, to our proven implementation methodology delivered by certified professional services teams and partners.</p>
                            <button className="health-care-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mambers">
                <div className="container">
                    <div className="member">

                        <div className="member-info">
                            <h1>CX Success.</h1>
                            <p>TTalkdesk unlocks the value of your contact center business transformation. From technical support and managed services to education and advisory services, Talkdesk helps you measure, manage, and realize the value of best-in-class CX.</p>
                            <button className="health-care-btn">Learn More</button>
                        </div>
                        <div className="member-img">
                            <img src={cx3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bring-your-contact">
                <div className="container">
                    <h2 className="pb-2">Bring your contact center of the future to <br /> life with expert help.</h2>
                    <p>Talkdesk helps you to build the business case for modernizing  your customer experience.<br /> Our proven implementation methodology—along with adoption, training, <br /> and support services—ensures the rapid results you expect and deserve.</p>
                </div>
            </div>
        </div>
    );
};

export default Supports;