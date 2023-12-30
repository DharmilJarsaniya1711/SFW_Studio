import React, { Component, Fragment } from "react";

const ModalSuccess = (props) => {
    return (
        <Fragment>
            <div class={"wrapper__modal-connect modal fade " + (props.modalSuccess ? "show" : "")} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="content__modal-connect text-center">
                                <img src="./../images/new/tick-circle.png" className="mb-4" alt="" />
                                <h2 className="medium font__size--32 text__32-1024 text__32-xs">Success!</h2>
                                <p className="normal font__size--16 text__16-1024 color__gray-1 mb-4">Your password is succesfully <br />created</p>
                                <a href="#!" onClick={() => props.onCLickModalSuccess(!props.modalSuccess)} className="semi-bold font__size--16 text__16-1024 btn btn__outlined--black no__opacity shadow color__black h__white rounded__50">Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ModalSuccess;
