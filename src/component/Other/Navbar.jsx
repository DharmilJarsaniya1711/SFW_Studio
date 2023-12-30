import React, { Component, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CartIcons, LogoIcons } from "../Icons/Icons";

import Login from "./../Modal/Auth/Login";
import Register from "./../Modal/Auth/Register";
import Confirm from "./../Modal/Auth/Confirm";
import Code from "./../Modal/Auth/Code";
import ForgotPassword from "../Modal/Auth/ForgotPassword";
import VerificationCode from "../Modal/Auth/VerificationCode";
import NewPassword from "../Modal/Auth/NewPassword";
import ModalSuccess from "../Modal/Auth/ModalSuccess";

const Navbar = (props) => {
  const [toogleMenu, setToogleMenu] = useState(false);

  const [modalLogin, setModalLogin] = useState(false);
  const onCLickModalLogin = () => {
    console.log(!modalLogin);
    if (!modalLogin) {
      console.log("add");
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalLogin(!modalLogin);
  };

  const [modalRegister, setModalRegister] = useState(false);
  const onCLickModalRegister = () => {
    if (!modalRegister) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalRegister(!modalRegister);
  };

  const [modalConfirm, setModalConfirm] = useState(false);
  const onCLickModalConfirm = () => {
    if (!modalConfirm) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalConfirm(!modalConfirm);
  };

  const [modalCode, setModalCode] = useState(false);
  const onCLickModalCode = () => {
    if (!modalCode) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalCode(!modalCode);
  };

  const [modalForgotPassword, setModalForgotPassword] = useState(false);
  const onCLickModalForgotPassword = () => {
    if (!modalForgotPassword) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalForgotPassword(!modalForgotPassword);
  };

  const [modalVerificationCode, setModalVerificationCode] = useState(false);
  const onCLickModalVerificationCode = () => {
    if (!modalVerificationCode) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalVerificationCode(!modalVerificationCode);
  };

  const [modalNewPassword, setModalNewPassword] = useState(false);
  const onCLickModalNewPassword = () => {
    if (!modalNewPassword) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalNewPassword(!modalNewPassword);
  };

  const [modalSuccess, setModalSuccess] = useState(false);
  const onCLickModalSuccess = () => {
    if (!ModalSuccess) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalSuccess(!modalSuccess);
  };

  const onCLickSwitchModal = async (e) => {
    if (e == "login") {
      setModalRegister(!modalRegister);
      const timeout = await setTimeout(() => {
        setModalLogin(!modalLogin);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "register") {
      setModalLogin(!modalLogin);
      const timeout = await setTimeout(() => {
        setModalRegister(!modalRegister);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "confirm") {
      if (modalLogin) {
        setModalLogin(!modalLogin);
      }
      if (modalRegister) {
        setModalRegister(!modalRegister);
      }
      const timeout = await setTimeout(() => {
        setModalConfirm(!modalConfirm);
      }, 1000);
      return () => clearInterval(timeout);
    }

    if (e == "code") {
      setModalConfirm(!modalConfirm);
      const timeout = await setTimeout(() => {
        setModalCode(!modalCode);
      }, 1000);
      return () => clearInterval(timeout);
    }

    if (e == "forgotPassowrd") {
      if (modalLogin) {
        setModalLogin(!modalLogin);
      }

      const timeout = await setTimeout(() => {
        setModalForgotPassword(!modalForgotPassword);
      }, 1000);
      return () => clearInterval(timeout);
    }

    if (e == "verificatonCode") {
      if (modalForgotPassword) {
        setModalForgotPassword(!modalForgotPassword);
      }

      const timeout = await setTimeout(() => {
        setModalVerificationCode(!modalVerificationCode);
      }, 1000);
      return () => clearInterval(timeout);
    }

    if (e == "newPassword") {
      if (modalVerificationCode) {
        setModalVerificationCode(!modalVerificationCode);
      }

      const timeout = await setTimeout(() => {
        setModalNewPassword(!modalNewPassword);
      }, 1000);
      return () => clearInterval(timeout);
    }

    if (e == "success") {
      if (modalNewPassword) {
        setModalNewPassword(!modalNewPassword);
      }

      const timeout = await setTimeout(() => {
        setModalSuccess(!modalSuccess);
      }, 1000);
      return () => clearInterval(timeout);
    }
  };

  return (
    <Fragment>
      <Login
        modalLogin={modalLogin}
        onCLickModalLogin={() => onCLickModalLogin()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />
      <Register
        modalRegister={modalRegister}
        onCLickModalRegister={() => onCLickModalRegister()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />
      <Confirm
        modalConfirm={modalConfirm}
        onCLickModalConfirm={() => onCLickModalConfirm()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />
      <Code
        modalCode={modalCode}
        onCLickModalCode={() => onCLickModalCode()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />

      <ForgotPassword
        modalForgotPassword={modalForgotPassword}
        onCLickModalForgotPassword={() => onCLickModalForgotPassword()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />

      <VerificationCode
        modalVerificationCode={modalVerificationCode}
        onCLickModalVerificationCode={() => onCLickModalVerificationCode()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />

      <NewPassword
        modalNewPassword={modalNewPassword}
        onCLickModalNewPassword={() => onCLickModalNewPassword()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />

      <ModalSuccess
        modalSuccess={modalSuccess}
        onCLickModalSuccess={() => onCLickModalSuccess()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />

      <div
        className={
          "wrapper__side-nav-mobile d-flex d-xl-none " +
          (toogleMenu ? "active" : "")
        }
      >
        <div className="container">
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <NavLink
                to="/"
                exact
                class="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
              >
                <div className="d-flex align-items-center">
                  <img src="./../images/new/Logo_light.svg" alt="" />
                </div>
              </NavLink>

              <div className="d-flex align-items-center justify-content-end">
                <NavLink
                  to="/payment"
                  className="position-relative wrapper__icon-cart pointer"
                >
                  <div className="circle"></div>
                  <CartIcons color={"#1C1C1E"} />
                </NavLink>
                <div
                  onClick={() => setToogleMenu(!toogleMenu)}
                  class="nav__button close__menu position-relative flex-shrink-0 ml-4"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="menu">
              <NavLink
                to="/"
                className="medium font__size--24 text__24-1024 color__black"
              >
                Home
              </NavLink>
              <hr />
              <NavLink
                to="/programs"
                className="medium font__size--24 text__24-1024 color__black"
              >
                Programs
              </NavLink>
              <hr />
              <NavLink
                to="/trainers"
                className="medium font__size--24 text__24-1024 color__black"
              >
                Trainers
              </NavLink>
              <hr />
              <NavLink
                to="/membership"
                className="medium font__size--24 text__24-1024 color__black"
              >
                Membership
              </NavLink>
              <hr />
              <NavLink
                to="/contact"
                className="medium font__size--24 text__24-1024 color__black"
              >
                Contact
              </NavLink>
              <hr />
              <a
                href="#!"
                className="medium w-100 mb-3 font__size--14 btn__auth btn btn__outlined--black color__black no__opacity shadow h__white"
                onClick={() => onCLickModalLogin()}
              >
                Log In
              </a>
              <a
                href="#!"
                className="medium w-100 font__size--14 btn__auth btn btn__green color__black  shadow "
                onClick={() => onCLickModalRegister()}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-xl bg__black-2 wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <NavLink
            to="/"
            exact
            class="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
          >
            <div className="d-flex align-items-center">
              {props.type == "dark" ? (
                <img src="./../images/new/Logo_light.svg" alt="" />
              ) : (
                <img src="./../images/new/Logo_dark.svg" alt="" />
              )}
            </div>
          </NavLink>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  class={
                    "nav-link medium font__size--14 text__14-1024 opacity__7 text-capitalize hover " +
                    (props.type == "dark" ? "color__black" : "color__white")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/programs"
                  class={
                    "nav-link medium font__size--14 text__14-1024 opacity__7 text-capitalize hover " +
                    (props.type == "dark" ? "color__black" : "color__white")
                  }
                >
                  Programs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/trainers"
                  class={
                    "nav-link medium font__size--14 text__14-1024 opacity__7 text-capitalize hover " +
                    (props.type == "dark" ? "color__black" : "color__white")
                  }
                >
                  Trainers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/membership"
                  class={
                    "nav-link medium font__size--14 text__14-1024 opacity__7 text-capitalize hover " +
                    (props.type == "dark" ? "color__black" : "color__white")
                  }
                >
                  Membership
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  class={
                    "nav-link medium font__size--14 text__14-1024 opacity__7 text-capitalize hover " +
                    (props.type == "dark" ? "color__black" : "color__white")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center ml-auto">
            <NavLink
              to="/payment"
              className="position-relative wrapper__icon-cart pointer"
            >
              <div className="circle"></div>
              <CartIcons color={props.type == "dark" ? "#1C1C1E" : "white"} />
            </NavLink>
            <div
              onClick={() => setToogleMenu(!toogleMenu)}
              class={
                "nav__button d-xl-none position-relative flex-shrink-0 ml-4 " +
                (props.type == "dark" ? "dark" : "")
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a
              href="#!"
              className={
                "d-none d-xl-block medium font__size--14 text__14-1024 btn__auth btn no__opacity shadow  ml-4 mr-2 " +
                (props.type == "dark"
                  ? "btn__outlined--black color__black h__white"
                  : "btn__outlined--white color__white h__black")
              }
              onClick={() => onCLickModalLogin()}
            >
              Log In
            </a>
            <a
              href="#!"
              className="d-none d-xl-block medium font__size--14 text__14-1024 btn__auth btn btn__green color__black  shadow "
              onClick={() => onCLickModalRegister()}
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
