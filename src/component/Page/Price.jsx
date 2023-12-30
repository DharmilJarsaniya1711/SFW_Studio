import React from 'react'
import { NavLink } from 'react-router-dom'

const Price = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center mb-5">
                    <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Membership</div>

                    <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm">Crushing your health and fitness goals <br className='d-none d-md-block' /> starts here...</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                        <div className="wrapper__price-list">
                            <h4 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3">$0<sub className="medium font__size--16 text__16-1024 color__gray-1">/Month</sub></h4>
                            <p className="medium font__size--20 text__20-1024 color__blue mb-0">Free Plan</p>

                            <ul className="list__data-detail medium font__size--18 text__18-1024 my-4">
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                        <span className="ml-2">1 classes per month</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                        <span className="ml-2">Competitive CrossFit</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                        <span className="ml-2">10 health & fitness guides</span>
                                    </div>
                                </li>
                            </ul>

                            <NavLink
                                to="/membership/detail" className="medium font__size--14 text__14-1024 color__black btn btn__green shadow w-100 rounded__50">Puchase Plan</NavLink>

                        </div>
                    </div>
                    <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                        <div className="wrapper__price-list bg__blue">
                            <h4 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3 color__white">$149.00<sub className="medium font__size--16 text__16-1024 color__gray-1">/Month</sub></h4>
                            <p className="medium font__size--20 text__20-1024 color__white mb-0">Basic Plan</p>

                            <ul className="list__data-detail medium font__size--18 text__18-1024 my-4 color__white">
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/light_Icon.svg" alt="" className='object-fit-content' />
                                        <span className="ml-2">8 classes per month</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/light_Icon.svg" alt="" className='object-fit-content' />
                                        <span className="ml-2">Access to online classes</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/light_Icon.svg" alt="" className='object-fit-content' />
                                        <span className="ml-2">1-on-1 personal trainning</span>
                                    </div>
                                </li>
                            </ul>

                            <NavLink
                                to="/membership/detail" className="medium font__size--14 text__14-1024 color__black btn btn__green shadow w-100 rounded__50">Puchase Plan</NavLink>

                        </div>
                    </div>
                    <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                        <div className="wrapper__price-list">
                            <h4 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3">289.00<sub className="medium font__size--16 text__16-1024 color__gray-1">/Month</sub></h4>
                            <p className="medium font__size--20 text__20-1024 color__blue mb-0">Professional Plan</p>

                            <ul className="list__data-detail medium font__size--18 text__18-1024 my-4">
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                        <span className="ml-2">20 classes per month</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                        <span className="ml-2">Access to online classes</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <img src="./../images/new/Icon.svg" className='object-fit-content' alt="" />
                                        <span className="ml-2">Access to my online tutorials</span>
                                    </div>
                                </li>
                            </ul>

                            <NavLink
                                to="/membership/detail" className="medium font__size--14 text__14-1024 color__black btn btn__green shadow w-100 rounded__50">Puchase Plan</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Price