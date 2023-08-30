import React from 'react';
import './singleService.css';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleService = (props) => {
    const { image, money, exam, about, } = props.service;
    const faRignt = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div class="col">
            <div class="card h-100">
                <img src={image} class="card-img-top" alt="" />
                <div class="card-body">
                    <h4 class="card-title" className="card-h4">{exam}</h4>
                    <p class="card-text">{about}</p>
                </div>
                <div class="card-footer" className="card-footer">
                    <Link className="read-more-btn">Read More {faRignt}</Link>
                    <small className="small-footer">${money}</small>
                </div>
            </div>
        </div>

    );
};


export default SingleService;