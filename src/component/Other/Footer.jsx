import React from "react";
import { NavLink } from "react-router-dom";
import { LogoIcons } from "../Icons/Icons";

const Footer = () => {
  return (
    <section className="bg__blue pb-4">
      <div className="container">
        <div className="row mb-4 mb-sm-5">
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <img src="./../images/new/Logo_dark.svg" alt="" />

              {/* <LogoIcons /> */}
              {/* <span className="color__white font__size--20 text__20-1024 semi-bold ml-2">Bulk<span className="normal">ing</span></span> */}
            </div>
            <p className="normal font__size--16 text__16-1024 color__gray-3">
              Get fit, stay healthy, and live life on their terms without
              fitness being an obstacle.
            </p>
          </div>
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
            <div className="wrapper__menu-footer d-flex flex-wrap align-items-center justify-content-start  justify-content-md-center">
              <NavLink
                to="/"
                className="medium font__size--16 text__16-1024 color__white opacity__5 hover"
              >
                Home
              </NavLink>
              <NavLink
                to="/programs"
                className="medium font__size--16 text__16-1024 color__white opacity__5 hover"
              >
                Programs
              </NavLink>
              <NavLink
                to="/membership"
                className="medium font__size--16 text__16-1024 color__white opacity__5 hover"
              >
                Membership
              </NavLink>
              <NavLink
                to="/blog"
                className="medium font__size--16 text__16-1024 color__white opacity__5 hover"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="medium font__size--16 text__16-1024 color__white opacity__5 hover"
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className="medium font__size--16 text__16-1024 color__white opacity__5 hover"
              >
                About Us
              </NavLink>
            </div>
          </div>
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
            <h5 className="medium font__size--16 text__16-1024 color__white opacity__5 mb-4">
              Newsletter
            </h5>

            <div className="d-flex align-items-center">
              <input
                type="text"
                placeholder="Your email here"
                className="normal color__gray-1 font__size--16 text__16-1024 wrapper__input-field sub"
              />
              <button className="medium font__size--16 text__16-1024 btn btn__green color__black shadow rounded__50 ml-3">
                Send
              </button>
            </div>
          </div>
        </div>
        <img src="./../images/Line@2x.png" className="w-100 mb-4" alt="" />
        <div className="d-md-flex aligen-items-center justify-content-between position-relative">
          <p className="mb-0 normal font__size--16 text__16-1024 color__gray-3">
            © 2023 SFW Studio
          </p>
          <div className="wrapper__sosmed center d-flex align-items-center justify-content-md-center my-3 my-md-0">
            <a href="#!">
              <img src="./../images/svg.png" alt="" />
            </a>
            <a href="#!">
              <img src="./../images/svg (1).png" alt="" />
            </a>
            <a href="#!">
              <img src="./../images/svg (2).png" alt="" />
            </a>
            <a href="#!">
              <img src="./../images/svg (3).png" alt="" />
            </a>
            <a href="#!">
              <img src="./../images/svg (4).png" alt="" />
            </a>
          </div>

          <div className="d-flex align-items-center">
            <p className="color__secondary">
              Design &amp; Developed by{" "}
              <a className="color__secondary" href="https://www.devoqdesign.com">Devoq Design</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
