import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import CoreWorks from "../../component/Page/CoreWorks";
import Testimonial from "../../component/Page/Testimonial";

const About = (props) => {
    return (
        <Fragment>
            <div className="overflow-hidden">

                <div className="position-relative bg__blue">
                    <Navbar />

                    <section className="position-relative pb-0">
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-md-6 mb-4 my-md-auto">
                                    <div className="medium font__size--14 text__14-1024 btn__tag green mb-3">About Me</div>
                                    <h1 className="medium font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs color__white"><span className="normal">Hi, I'm</span> Adison, <span className="normal">your</span> personal trainner</h1>
                                </div>
                                <div className="col-md-6 my-auto">
                                    <h5 className="medium font__size--24 text__24-1024 color__white">What's my story?</h5>
                                    <p className="normal font__size--18 text__18-1024 color__gray-3">Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id pulvinar enim volutpat tellus. Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt__min-4">
                            <img src="./../images/new/Group 2.png" alt="" />
                        </div>
                    </section>
                </div>


                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="medium font__size--48 text__48-1024 text__48-md text__48-sm text__48-xx">My Core Work Values</h2>
                            <p className="normal font__size--16 text__16-1024 color__gray-2">Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id pulvinar enim volutpat tellus. </p>
                        </div>

                        <div className="row mb-5">
                            <div className="col-lg-6 order-lg-1 order-12 mt-4 my-lg-auto">
                                <div className="wrapper__side-content-body">
                                    <img src="./../images/new/fitness-biceps.svg" className="mb-3" alt="" />
                                    <h3 className="medium font__size--32 text__32-1024 text__32-xs mb-4">Commitment</h3>
                                    <p className="medium font__size--18 text__18-1024">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-12 my-lg-auto">
                                <img src="./../images/new/aa (1).png" className="images__side-about" alt="" />
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-lg-6 my-lg-auto">
                                <img src="./../images/new/aa (2).png" className="images__side-about" alt="" />
                            </div>
                            <div className="col-lg-6 mt-4 my-lg-auto">
                                <div className="wrapper__side-content-body">
                                    <img src="./../images/new/heart-checkmark.svg" className="mb-3" alt="" />
                                    <h3 className="medium font__size--32 text__32-1024 text__32-xs mb-4">Motivation</h3>
                                    <p className="medium font__size--18 text__18-1024">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-lg-6 order-lg-1 order-12 mt-4 my-lg-auto">
                                <div className="wrapper__side-content-body">
                                    <img src="./../images/new/star-shining.svg" className="mb-3" alt="" />
                                    <h3 className="medium font__size--32 text__32-1024 text__32-xs mb-4">Passion</h3>
                                    <p className="medium font__size--18 text__18-1024">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-12 my-lg-auto">
                                <img src="./../images/new/aa (3).png" className="images__side-about" alt="" />
                            </div>
                        </div>


                    </div>
                </section>

                <Testimonial />

                <Footer />

            </div >
        </Fragment >
    );
};

export default About;
