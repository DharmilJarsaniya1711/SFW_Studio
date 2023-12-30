import React from 'react'
import { NavLink } from 'react-router-dom'

const Discover = () => {
    return (
        <section className='bg__green'>
            <div className="container">
                <div className="row justify-content-between text-center text-md-left">
                    <div className='col-md-7 mb-4 my-md-auto'>
                        <h2 className='medium font__size--48 text__48-1024 text__48-md text__48-sm text__48-xx'>Discover Your Potential</h2>
                        <p className='normal font__size--16 text__16-1024 opacity__8 mb-0'>Workout was started by James and Mount in 2012. It’s our mission to help people in Denver get fit, stay healthy, and live life on their terms without fitness being an obstacle. </p>
                    </div>
                    <div className='col-md-4 my-auto text-md-right'>
                        <NavLink to="/trainers" className='medium font__size--14 text__14-1024 btn btn__black shadow color__green rounded__50'>Get Started</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover