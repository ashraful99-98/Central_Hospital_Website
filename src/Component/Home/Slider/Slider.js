import React from 'react';
import slider from '../../images/slider/slider.jpg';
import slider2 from '../../images/slider/slider-2.jpg';
import slider3 from '../../images/slider/slider-3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <>
            <section class="home">
                <div id="carouselExampleDark" class="carousel carousel-dark slide slides-container" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">

                        <div class="carousel-item slide active">
                            <div class="content">
                                <span>Home Care Providers</span>
                                <h3>Your health is our focus</h3>
                                <a href="/services" class="slide-btn">LIST OF SERVICES</a>
                            </div>
                            <div class="image">
                                <img src={slider} alt="" />
                            </div>
                        </div>

                        <div class="carousel-item slide">
                            <div class="content">
                                <span>Home Care Providers</span>
                                <h3>Your health is our focus</h3>
                                <a href="/services" class="slide-btn">LIST OF SERVICES</a>
                            </div>
                            <div class="image">
                                <img src={slider2} alt="" />
                            </div>
                        </div>
                        <div class="carousel-item slide">
                            <div class="content">
                                <span>Home Care Providers</span>
                                <h3>Your health is our focus</h3>
                                <a href="/services" class="slide-btn">LIST OF SERVICES</a>
                            </div>
                            <div class="image">
                                <img src={slider3} alt="" />
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Slider;