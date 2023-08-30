import React from 'react';
import './Service.css';
const Service = (props) => {
    const { image, money, exam, about } = props.service;
    return (
        <div>
            <div class="col" className="single-service">
                <div>
                    <div className="img-div">
                        <img src={image} className="service-img" alt="" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title" className="text-primary">{exam}</h4>
                        <h5 class="card-text">Test: ${money}</h5>
                        <div>
                            <p><span className="big-test">Test Information=</span>"{about}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;