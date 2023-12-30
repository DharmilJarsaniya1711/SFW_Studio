import React, { useState, Fragment } from "react";

const NewPassword = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordNew, setShowPasswordNew] = useState(true);
  return (
    <Fragment>
      <div
        class={
          "wrapper__modal-wrap modal fade " +
          (props.modalNewPassword ? "show" : "")
        }
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="bg__wrap"
          onClick={() => props.onCLickModalNewPassword()}
        ></div>
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content position-relative">
            <div
              className="close__wrap pointer"
              onClick={() => props.onCLickModalNewPassword()}
            >
              <img src="./../images/new/sdd.png" alt="" />
            </div>

            <div className="text-center mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <img src="./../images/new/Logo_light.svg" alt="" />
              </div>
              <h4 className="medium font__size--32 text__32-1024 mt-3">
                Create New Password
              </h4>
            </div>

            <div className="form-group">
              <label htmlFor="" className="medium font__size--14 text__14-1024">
                Password
              </label>
              <div className="wrapper__field-wrap d-flex align-items-center justify-content-between">
                <input
                  type={showPassword ? "password" : "text"}
                  className="form-control medium font__size--16 text__16-1024"
                  placeholder="Enter your password"
                />
                <img
                  src="./../images/eye-slash.png"
                  className="pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  alt=""
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="" className="medium font__size--14 text__14-1024">
                New Password
              </label>
              <div className="wrapper__field-wrap d-flex align-items-center justify-content-between">
                <input
                  type={showPasswordNew ? "password" : "text"}
                  className="form-control medium font__size--16 text__16-1024"
                  placeholder="Enter your password"
                />
                <img
                  src="./../images/eye-slash.png"
                  className="pointer"
                  onClick={() => setShowPasswordNew(!showPasswordNew)}
                  alt=""
                />
              </div>
            </div>

            <button
              className="btn btn__green shadow color__black w-100 font__size--16 text__16-1024 medium rounded__50"
              onClick={(e) => {
                props.onCLickSwitchModal("success");
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

export default NewPassword;
