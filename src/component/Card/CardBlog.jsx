import React from 'react'
import { NavLink } from 'react-router-dom'

export const CardBlog = (props) => {
    return (
        <div className="wrapper__card-blog">
            <img src={props.data} className='cover mb-3' alt="" />
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="medium font__size--14 text__14-1024">Featured</div>
                <p className='mb-0 normal font__size--18 text__18-1024 color__gray-2'>Nov 22, 2022</p>
            </div>
            <h3 className='medium font__size--20 text__20-1024'>The interesting mental health benefits of exercise</h3>
            <p className='mb-4 normal font__size--18 text__18-1024 color__gray-2 clamp__2'>Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada...</p>
            <NavLink to="/blog/detail" className='medium font__size--14 text__14-1024 color__black d-inline-block'>
                <div className="d-flex align=items-center">
                    Read More <img src="./../images/new/arrow-right.svg" className='ml-2 flex-shrink-0 object-fit-content' alt="" />
                </div>
            </NavLink>
        </div>
    )
}
