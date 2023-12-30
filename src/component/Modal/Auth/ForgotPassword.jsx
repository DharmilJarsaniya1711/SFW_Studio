import React, { useState, Fragment } from "react";

const ForgotPassword = (props) => {
  const onLogin = () => {
    localStorage.setItem("status", "login");
  };
  return (
    <Fragment>
      <div
        class={
          "wrapper__modal-wrap modal fade " +
          (props.modalForgotPassword ? "show" : "")
        }
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="bg__wrap"
          onClick={() => props.onCLickModalForgotPassword()}
        ></div>
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content position-relative">
            <div
              className="close__wrap pointer"
              onClick={() => props.onCLickModalForgotPassword()}
            >
              <img src="./../images/new/sdd.png" alt="" />
            </div>

            <div className="text-center mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <img src="./../images/new/Logo_light.svg" alt="" />
              </div>
              <h4 className="medium font__size--32 text__32-1024 mt-3">
                Reset Password
              </h4>
              <p className="normal font__size--16 text__16-1024 color__gray-2">
                Recover your account password
              </p>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="" className="medium font__size--14 text__14-1024">
                Email
              </label>
              <div className="wrapper__field-wrap">
                <input
                  type="text"
                  className="form-control medium font__size--16 text__16-1024"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              className="btn btn__green shadow color__black w-100 font__size--16 text__16-1024 medium rounded__50"
              onClick={(e) => {
                props.onCLickSwitchModal("verificatonCode");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
