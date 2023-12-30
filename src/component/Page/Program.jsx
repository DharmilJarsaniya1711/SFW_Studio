import React from 'react'
import { NavLink } from 'react-router-dom'

const Program = () => {
    return (
        <div className="row wrapper__wrap-info">
            <div className="items col-md-4">
                <img src="./../images/new/fitness-biceps.svg" className="mb-4" alt="" />
                <h5 className="medium font__size--20 text__20-1024">Personal Training</h5>
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">It’s a long estabilished fact that a reader will be distracted by the readable content</p>

                <NavLink
                  to="/programs/detail" className="d-inline-block color__black">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">Learn More</span><img src="./../images/new/arrow-right.svg" alt="" />
                    </div>
                </NavLink>
            </div>
            <div className="items bg__green col-md-4">
                <img src="./../images/new/dumbbell.svg" className="mb-4" alt="" />
                <h5 className="medium font__size--20 text__20-1024">Personal Training</h5>
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">It’s a long estabilished fact that a reader will be distracted by the readable content</p>

                <NavLink
                  to="/programs/detail" className="d-inline-block color__black">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">Learn More</span><img src="./../images/new/arrow-right.svg" alt="" />
                    </div>
                </NavLink>
            </div>
            <div className="items col-md-4">
                <img src="./../images/new/slim-waist.svg" className="mb-4" alt="" />
                <h5 className="medium font__size--20 text__20-1024">Personal Training</h5>
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">It’s a long estabilished fact that a reader will be distracted by the readable content</p>

                <NavLink
                  to="/programs/detail" className="d-inline-block color__black text__16-1024">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">Learn More</span><img src="./../images/new/arrow-right.svg" alt="" />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Program