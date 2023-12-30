import React from 'react'
import { useRef } from 'react';
import Slider from "react-slick";

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { LeftIcons, RightIcons } from '../Icons/Icons';

const SliderTestimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => {
            return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={20} />;
        },
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const slider1 = useRef(null);

    const previous = () => {
        slider1.current.slickNext();
    };

    const next = () => {
        slider1.current.slickPrev();
    };
    return (
        <div className="position-relative">
            <div className="wrapper__arrow-width">
                <div className='pointer left' onClick={previous}>
                    <LeftIcons />
                </div>
                <div className='pointer right' onClick={next}>
                    <RightIcons />
                </div>

            </div>
            <Slider ref={slider1} {...settings} className='wrapper__slider-testimonial'>
                <div className="items">
                    <div className="wrapper__card-testi position-relative">
                        <div className="d-flex align-items-start">
                            <img src="./../images/new/quote-up.png" className='logo' alt="" />
                            <div className='ml-2'>
                                <p className='medium font__size--14 text__14-1024 color__gray-2 mb-2'>Member Review</p>
                                <h5 className='normal font__size--24 text__24-1024 lh__4 mb-4'>Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. </h5>
                                <div className="d-flex align-items-center user">
                                    <img src="./../images/new/Ellipse 1.png" alt="" />
                                    <div className='ml-2 text-left'>
                                        <h5 className='medium font__size--16 text__16-1024 mb-0'>Davis Rosser</h5>
                                        <p className='mb-0 normal font__size--14 text__14-1024'>Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="wrapper__card-testi position-relative">
                        <div className="d-flex align-items-start">
                            <img src="./../images/new/quote-up.png" className='logo' alt="" />
                            <div className='ml-2'>
                                <p className='medium font__size--14 text__14-1024 color__gray-2 mb-2'>Member Review</p>
                                <h5 className='normal font__size--24 text__24-1024 lh__4 mb-4'>Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. </h5>
                                <div className="d-flex align-items-center user">
                                    <img src="./../images/new/Ellipse 1.png" alt="" />
                                    <div className='ml-2 text-left'>
                                        <h5 className='medium font__size--16 text__16-1024 mb-0'>Davis Rosser</h5>
                                        <p className='mb-0 normal font__size--14 text__14-1024'>Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="wrapper__card-testi position-relative">
                        <div className="d-flex align-items-start">
                            <img src="./../images/new/quote-up.png" className='logo' alt="" />
                            <div className='ml-2'>
                                <p className='medium font__size--14 text__14-1024 color__gray-2 mb-2'>Member Review</p>
                                <h5 className='normal font__size--24 text__24-1024 lh__4 mb-4'>Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. </h5>
                                <div className="d-flex align-items-center user">
                                    <img src="./../images/new/Ellipse 1.png" alt="" />
                                    <div className='ml-2 text-left'>
                                        <h5 className='medium font__size--16 text__16-1024 mb-0'>Davis Rosser</h5>
                                        <p className='mb-0 normal font__size--14 text__14-1024'>Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SliderTestimonial