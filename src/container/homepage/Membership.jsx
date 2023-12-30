import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Testimonial from '../../component/Page/Testimonial'

const Membership = () => {
    const data = [
        {
            title: "Classes per month",
            path_1: "1",
            path_2: "8",
            path_3: "20",
            type: "text",
        },
        {
            title: "Access to online classes",
            path_1: "./../images/rt (3).png",
            path_2: "./../images/rt (3).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Health & fitness guides",
            path_1: "./../images/rt (3).png",
            path_2: "./../images/rt (3).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Full Warmup guide",
            path_1: "./../images/rt (3).png",
            path_2: "./../images/rt (3).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Access video Link",
            path_1: "./../images/rt (2).png",
            path_2: "./../images/rt (3).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Full diet plan",
            path_1: "./../images/rt (2).png",
            path_2: "./../images/rt (3).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Nutritional support",
            path_1: "./../images/rt (2).png",
            path_2: "./../images/rt (3).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Full customize plan",
            path_1: "./../images/rt (2).png",
            path_2: "./../images/rt (2).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "Daily progress check up",
            path_1: "./../images/rt (2).png",
            path_2: "./../images/rt (2).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
        {
            title: "All Intermediate package",
            path_1: "./../images/rt (2).png",
            path_2: "./../images/rt (2).png",
            path_3: "./../images/rt (3).png",
            type: "img",
        },
    ]
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Membership</div>

                        <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm">Crushing your health and fitness goals <br className='d-none d-md-block' /> starts here...</h2>
                    </div>

                    <div className="wrapper__offsite-wrap">
                        <div className="wrapper__table-compare-group">
                            <div className="row mb-5">
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <div className="row justify-content-center">
                                        <div className="col-4">
                                            <div className="wrapper__price-list">
                                                <h4 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3">$0<sub className="medium font__size--16 text__16-1024 color__gray-1">/Month</sub></h4>
                                                <p className="medium font__size--20 text__20-1024 color__blue mb-2">Free Plan</p>

                                                <p className='normal font__size--16 text__16-1024'>
                                                    It’s a long estabilished fact that a reader will be distracted by the readable content
                                                </p>

                                                <NavLink
                                                    to="/membership/detail" className="medium font__size--14 text__14-1024 color__black btn btn__green shadow w-100 rounded__50">Puchase Plan</NavLink>

                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="wrapper__price-list bg__blue">
                                                <h4 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3 color__white">$149.00<sub className="medium font__size--16 text__16-1024 color__gray-1">/Month</sub></h4>
                                                <p className="medium font__size--20 text__20-1024 color__white mb-2">Basic Plan</p>

                                                <p className='normal font__size--16 text__16-1024 color__white'>
                                                    It’s a long estabilished fact that a reader will be distracted by the readable content
                                                </p>

                                                <NavLink
                                                    to="/membership/detail" className="medium font__size--14 text__14-1024 color__black btn btn__green shadow w-100 rounded__50">Puchase Plan</NavLink>

                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="wrapper__price-list">
                                                <h4 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3">289.00<sub className="medium font__size--16 text__16-1024 color__gray-1">/Month</sub></h4>
                                                <p className="medium font__size--20 text__20-1024 color__blue mb-2">Professional Plan</p>

                                                <p className='normal font__size--16 text__16-1024'>
                                                    It’s a long estabilished fact that a reader will be distracted by the readable content
                                                </p>

                                                <NavLink
                                                    to="/membership/detail" className="medium font__size--14 text__14-1024 color__black btn btn__green shadow w-100 rounded__50">Puchase Plan</NavLink>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table class="table head text-center">
                                <col class="w-f-first" />
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col" className=' semi-bold font__size--18 text__18-1024 text-left color__blue'>Overview</th>
                                        <th scope="col">

                                        </th>
                                        <th scope="col">

                                        </th>
                                        <th scope="col">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='medium font__size--16 text__16-1024'>
                                    {
                                        data.map((obj) => {
                                            return <tr>
                                                <th scope="row" cl
                                                    className='text-left normal'>
                                                    <div className="d-flex align-items-center">
                                                        <span className='medium font__size--18 text__18-1024'>{obj.title}</span>
                                                        <img src="./../images/rt (1).png" className='ml-2' alt="" />
                                                    </div>
                                                </th>
                                                <td>{obj.type == "text" ? obj.path_1 : <img src={obj.path_1} alt="" />}</td>
                                                <td>{obj.type == "text" ? obj.path_2 : <img src={obj.path_2} alt="" />}</td>
                                                <td>{obj.type == "text" ? obj.path_3 : <img src={obj.path_3} alt="" />}</td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </section>

            <Testimonial />

            <Footer />
        </div>
    )
}

export default Membership