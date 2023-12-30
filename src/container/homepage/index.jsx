import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Discover from "../../component/Page/Discover";
import Price from "../../component/Page/Price";
import Program from "../../component/Page/Program";
import Testimonial from "../../component/Page/Testimonial";

const Index = (props) => {
  return (
    <Fragment>
      <div className="overflow-hidden">

        <div className="position-relative bg__black">
          <Navbar />

          <section className="position-relative">
            <div className="container position-relative">
              <img src="./../images/new/Group 1.png" className="images__head-hero z-2 d-none d-lg-block" alt="" />
              <div className="row mb-5 position-relative">
                <div className="col-lg-6">
                  <h1 className="color__white font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs  normal">
                    For Your <span className="medium">Health</span> and <span className="medium">Fitness Goals</span> in No Time
                  </h1>
                  <p className="normal font__size--16 text__16-1024 color__gray-1 mb-5">It doesn’t matter if your goal is to get stronger, burn fat, or to <br className="d-none d-md-block" /> just stay fit our world class coaches will guide you every step of <br className="d-none d-md-block" /> the way.</p>
                  <NavLink
                    to="/contact" className="medium font__size--16 text__16-1024 btn btn__green color__white shadow rounded__24 color__black mb__5">Book a Class</NavLink>

                  <p className="medium font__size--14 text__14-1042 color__white">Supported by:</p>
                  <div className="wrapper__brand d-flex align-items-center opacity__6">
                    <img src="./../images/new/ad (1).png" alt="" />
                    <img src="./../images/new/ad (2).png" alt="" />
                    <img src="./../images/new/ad (3).png" alt="" />
                    <img src="./../images/new/ad (4).png" alt="" />
                  </div>
                </div>
              </div>

              <div className="row position-relative z-3">
                <div className="col-lg-9">
                  <Program />
                </div>
                <div className="col-lg-3 mt-4 my-lg-auto">
                  <h3 className="medium font__size--40 text__40-1024 text__40-md text__40-mm color__white">Training Program For You</h3>
                  <p className="normal font__size--14 text__14-1042 color__gray-1">Starting a fitness routine can be intimidating, but it helps to have an idea of whar to expect before joining any class.</p>
                </div>
              </div>
            </div>
          </section>
        </div>


        <section>
          <div className="container">
            <h2 className="medium font__size--48 text__48-1024 text__48-md text__48-sm text__48-xx text-center mb-5">We offer something for <br /> everybody</h2>

            <div className="row">
              <div className="col-lg-6 mb-4 my-lg-auto">
                <div className="wrapper__side-content-body">
                  <img src="./../images/new/fitness-biceps.svg" className="mb-3" alt="" />
                  <h3 className="medium font__size--32 text__32-1024 text__32-xs mb-4">Crush any strength program with our suite of strength equipment</h3>

                  <ul className="list__data-detail medium font__size--18 text__18-1024">
                    <li>
                      <div className="d-flex">
                        <img src="./../images/new/Icon.svg" className="object-fit-content" alt="" />
                        <span className="ml-2">Fully fitted powerlifting and strongman section</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="./../images/new/Icon.svg" className="object-fit-content" alt="" />
                        <span className="ml-2">Olympic lifting platforms, weights, and bars</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="./../images/new/Icon.svg" className="object-fit-content" alt="" />
                        <span className="ml-2">Dumbells ranging 5lbs-250lbs</span>
                      </div>
                    </li>
                  </ul>

                  <div className="d-block">
                    <img src="./../images/new/Line.png" className="my-4" alt="" />
                  </div>

                  <NavLink
                    to="/membership" className="medium font__size--16 text__16-1024 btn btn__green shadow rounded__50 color__black">Join Now</NavLink>
                </div>
              </div>
              <div className="col-lg-6 my-lg-auto">
                <img src="./../images/new/image (1).png" className="images__side-body" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 my-lg-auto">
                <img src="./../images/new/image (2).png" className="images__side-body" alt="" />
              </div>
              <div className="col-lg-6 my-lg-auto">
                <div className="wrapper__side-content-body">
                  <img src="./../images/new/heart-checkmark.svg" className="mb-3" alt="" />
                  <h3 className="medium font__size--32 text__32-1024 text__32-xs mb-4">Be guided every step of the way with one of our world class coaches</h3>

                  <ul className="list__data-detail medium font__size--18 text__18-1024">
                    <li>
                      <div className="d-flex">
                        <img src="./../images/new/Icon.svg" className="object-fit-content" alt="" />
                        <span className="ml-2">Weightloss</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="./../images/new/Icon.svg" className="object-fit-content" alt="" />
                        <span className="ml-2">Competitive CrossFit</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="./../images/new/Icon.svg" className="object-fit-content" alt="" />
                        <span className="ml-2">Powerlifting</span>
                      </div>
                    </li>
                  </ul>

                  <div className="d-block">
                    <img src="./../images/new/Line.png" className="my-4" alt="" />
                  </div>

                  <NavLink
                    to="/membership" className="medium font__size--16 text__16-1024 btn btn__green shadow rounded__50 color__black">Join Now</NavLink>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Price />

        <Testimonial />

        <Discover />

        <Footer />

      </div >
    </Fragment >
  );
};

export default Index;
