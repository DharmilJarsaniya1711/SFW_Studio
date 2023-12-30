import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import usePaymentInputs from 'react-payment-inputs/es/usePaymentInputs';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Payment = () => {
    const { getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    const [cardNumber, setCardNumber] = useState("");
    const handleChangeCardNumber = (e) => {
        setCardNumber(e.target.value)
    }

    const [expiryDate, setExpiryDate] = useState("");
    const handleChangeExpiryDate = (e) => {
        setExpiryDate(e.target.value)
    }

    const [cvc, setCvc] = useState("");
    const handleChangeCVC = (e) => {
        setCvc(e.target.value)
    }
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <h2 className='medium font__size--32 text__32-1024 text__32-xs mb-5'>Get your package</h2>
                    <div className="row">
                        <div className="col-lg-8 mb-4 mb-lg-0">

                            <h4 className="medium font__size--20 text__20-1024 mb-4">Pay with</h4>

                            <div className="wrapper__select-pay position-relative mb-4">
                                <input type="radio" name="payment" value="paypal" className="" />
                                <div className="wrap">
                                    <div className="radio"></div>
                                    <img src="./../images/Frame 162682.png" className="ml-3" alt="" />
                                </div>
                            </div>

                            <div className="wrapper__select-pay position-relative">
                                <input type="radio" name="payment" value="applepay" className="" />
                                <div className="wrap">
                                    <div className="radio"></div>
                                    <img src="./../images/ApplePay.png" className="ml-3" alt="" />
                                </div>
                            </div>

                            <h5 className="normal font__size--16 text__16-1024 color__gray-2 my-4">Or  using a credit card</h5>

                            <div className="form-group">
                                <label htmlFor="" className="medium font__size--16 text__16-1024 color__black">Cardholder Name</label>
                                <input className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="" className="medium font__size--16 text__16-1024 color__black">Card Number</label>
                                <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Ex:  31111 1111 1111 1111" />
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="medium font__size--16 text__16-1024 color__black w-100">Postal Code</label>
                                        <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Postal or ZIP code" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="medium font__size--16 text__16-1024 color__black">Expiration</label>
                                        <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="MM/YY" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="medium font__size--16 text__16-1024 color__black">CVV</label>
                                        <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" />
                                    </div>
                                </div>
                            </div>

                            <label class="medium wrapper__checkbox position-relative font__size--14 text__14-1024 color__black d-flex align-items-center mb-5">
                                <input type="checkbox" className="select" />
                                <span class="checkmark mb-0 mr-3">
                                    <div className="box"></div>
                                </span>
                                Save card
                            </label>

                            <NavLink to="/" className="medium font__size--16 text__16-1024 btn btn__green shadow rounded__50 color__black">Confirm and pay</NavLink>


                        </div>
                        <div className="col-lg-4">
                            <div className="wrapper__card-detail-program">
                                <h3 className='medium font__size--40 text__40-1024 text__40-md text__40-mm mb-4'>$149.00<span className='normal font__size--14 color__gray-1'>/Month</span></h3>

                                <h4 className='semi-bold font__size--18 text__18-1024 mb-2'>Basic Plan</h4>
                                <p className='normal font__size--16 text__16-1024 color__gray-2 mb-4'>It’s a long estabilished fact that a reader will be distracted by the readable content</p>

                                <h5 className='medium font__size--16 text__16-1024 mb-3'>What’s Includes:</h5>

                                <div className="d-flex mb-3">
                                    <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        8 classes per month
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        All in basic package
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        1-on-1 personal trainning
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h5 className='medium font__size--16 text__16-1024 mb-3'>Package Duration</h5>

                                    <select name="" id="" className='medium font__size--16 text__16-1024 wrapper__section-select'>
                                        <option value="">1 Month</option>
                                        <option value="">2 Month</option>
                                        <option value="">3 Month</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Payment