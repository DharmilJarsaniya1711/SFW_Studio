import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardBlog } from '../../component/Card/CardBlog'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Discover from '../../component/Page/Discover'

const Blog = () => {
    const data = [
        "./../images/new/news (2).png",
        "./../images/new/news (3).png",
        "./../images/new/news (4).png",
        "./../images/new/news (5).png",
        "./../images/new/news (6).png",
        "./../images/new/news (7).png",

    ]
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="mb-5">
                        <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Resource Center</div>

                        <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm">Featured <span className="normal">News</span></h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="wrapper__card-blog featured">
                                <img src="./../images/new/news (1).png" className='cover mb-3' alt="" />
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="medium font__size--14 text__14-1024 btn__tag">Featured</div>
                                    <p className='mb-0 normal font__size--18 text__18-1024 color__gray-2'>Nov 22, 2022</p>
                                </div>
                                <h3 className='medium font__size--32 text__32-1024 text__32-xs'>The interesting mental health benefits of exercise</h3>
                                <p className='mb-4 normal font__size--18 text__18-1024 color__gray-2 clamp__2'>Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada...</p>
                                <NavLink to="/blog/detail" className='medium font__size--14 text__14-1024 color__black d-inline-block'>
                                    <div className="d-flex align=items-center">
                                        Read More <img src="./../images/new/arrow-right.svg" className='ml-2 flex-shrink-0 object-fit-content' alt="" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 flex-fill">
                            <div className="d-flex flex-wrap align-content-between h-100">
                                <NavLink to="/blog/detail" className="wrapper__card-side color__black mb-4 mb-lg-0 w-100">
                                    <img src="./../images/new/news (2).png" className='mb-3 mb-sm-0' alt="" />
                                    <div className="desc ml-sm-3">
                                        <p className='normal font__size--18 text__18-1024 color__gray-2'>Nov 22, 2022</p>
                                        <h3 className='medium font__size--20 text__20-1024 mb-0'>The interesting mental health benefits of exercise</h3>
                                    </div>
                                </NavLink>
                                <NavLink to="/blog/detail" className="wrapper__card-side color__black mb-4 mb-lg-0 w-100">
                                    <img src="./../images/new/news (3).png" className='mb-3 mb-sm-0' alt="" />
                                    <div className="desc ml-sm-3">
                                        <p className='normal font__size--18 text__18-1024 color__gray-2'>Nov 22, 2022</p>
                                        <h3 className='medium font__size--20 text__20-1024 mb-0'>The interesting mental health benefits of exercise</h3>
                                    </div>
                                </NavLink>
                                <NavLink to="/blog/detail" className="wrapper__card-side color__black mb-4 mb-lg-0 w-100">
                                    <img src="./../images/new/news (4).png" className='mb-3 mb-sm-0' alt="" />
                                    <div className="desc ml-sm-3">
                                        <p className='normal font__size--18 text__18-1024 color__gray-2'>Nov 22, 2022</p>
                                        <h3 className='medium font__size--20 text__20-1024 mb-0'>The interesting mental health benefits of exercise</h3>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between mb-5">
                        <h3 className='mb-md-0 mb-4 medium font__size--32 text__32-1024 text__32-xs'>Topic Match For You</h3>
                        <div className="wrapper__category d-flex flex-wrap flex-sm-nowrap align-items-center">
                            <div className="items mb-3 mb-sm-0 pointer active medium font__size--14 text__14-1024">All</div>
                            <div className="items mb-3 mb-sm-0 pointer medium font__size--14 text__14-1024">Fitness</div>
                            <div className="items mb-3 mb-sm-0 pointer medium font__size--14 text__14-1024">Health</div>
                            <div className="items mb-3 mb-sm-0 pointer medium font__size--14 text__14-1024">Recipes</div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            data.map((obj) => {
                                return <div className="col-md-6 col-lg-4 mb-4">
                                    <CardBlog data={obj} />
                                </div>
                            })
                        }

                    </div>
                </div>
            </section>

            <Discover />

            <Footer />
        </div>
    )
}

export default Blog