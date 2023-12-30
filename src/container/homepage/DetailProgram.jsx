import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Testimonial from '../../component/Page/Testimonial'

const DetailProgram = () => {
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-xl-6">
                            <h2 className='medium font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs'>Personal <span className='normal'>Training</span></h2>
                            <p className='normal font__size--16 text__16-1024 color__gray-2'>It’s a long estabilished fact that a reader will be distracted by <br /> the readable content</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="wrapper__data-trining mb-5">
                                <div className="d-flex align-items-center items">
                                    <img src="./../images/new/fitness-biceps.svg" alt="" />
                                    <div className='ml-2'>
                                        <p className='medium font__size--14 text__14-1024 color__gray-2 mb-0'>01</p>
                                        <h5 className='medium font__size--18 text__18-1024 color__blue mb-0'>Power Up</h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center items">
                                    <img src="./../images/new/timer.svg" alt="" />
                                    <div className='ml-2'>
                                        <p className='medium font__size--14 text__14-1024 color__gray-2 mb-0'>02</p>
                                        <h5 className='medium font__size--18 text__18-1024 color__blue mb-0'>Be Flexible</h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center items">
                                    <img src="./../images/new/fitness-dumbbell.svg" alt="" />
                                    <div className='ml-2'>
                                        <p className='medium font__size--14 text__14-1024 color__gray-2 mb-0'>03</p>
                                        <h5 className='medium font__size--18 text__18-1024 color__blue mb-0'>Super Body Toning</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="wrapper__play-wrap position-relative mb-4">
                                <div className="icon">
                                    <img src="./../images/play_arrow_black_24dp 1.png" alt="" />
                                </div>
                                <img src="./../images/new/Video.png" className='vid' alt="" />
                            </div>

                            <div className="mb-4">
                                <h4 className='medium font__size--24 text__24-1024'>What is this class about?</h4>
                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2'>Pretium sed tempor vestibulum sit urna. Potenti purus sodales in enim nunc. In et auctor fusce sit donec condimentum. Diam ultrices enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi fermentum amet dui ullamcorper praesent elit. Viverra nam massa cursus leo blandit eget eu. Tempor enim neque metus nunc sodales at eros. Malesuada placerat vestibulum amet sit tempor mi dignissim. Feugiat nullam urna gravida vulputate mi eleifend laoreet. </p>
                            </div>

                            <div className="mb-4">
                                <h4 className='medium font__size--24 text__24-1024'>Is this the right fitness class for me?</h4>
                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2 mb-1'>Viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et. Suspendisse feugiat <span className='color__blue fw__5'>scelerisque</span> et, viverra urna imperdiet.Vitae interdum quis lacus ut viverra. </p>

                                <ol className='normal font__size--18 text__18-1024 color__gray-2 pl-3'>
                                    <li>Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</li>
                                    <li>Nunc semper velit netus donec commodo.</li>
                                    <li>Lacus hendrerit aliquam habitant eget faucibus venenatis turpis</li>
                                </ol>
                            </div>


                            <div className="mb-4">
                                <h4 className='medium font__size--24 text__24-1024'>How can I take a trial class?</h4>
                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2'>Diam ultrices enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi fermentum amet dui ullamcorper praesent elit. Viverra nam massa cursus leo blandit eget eu. Tempor enim neque metus nunc sodales at eros. Malesuada placerat vestibulum amet sit tempor mi dignissim. Feugiat nullam urna gravida vulputate mi eleifend laoreet. </p>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="wrapper__card-detail-program">
                                <h4 className='semi-bold font__size--18 text__18-1024 mb-2'>Details Program</h4>
                                <p className='normal font__size--16 text__16-1024 color__gray-2mb-4'>It’s a long estabilished fact that a reader will be distracted by the readable content</p>

                                <div className="d-flex mb-3">
                                    <img src="./../images/new/timer_icon.svg" alt=""/>
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        <span className='color__gray-2'>Duration:</span> 60 minutes
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <img src="./../images/new/star.svg" alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        <span className='color__gray-2'>Intensity:</span> High
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <img src="./../images/new/award.svg" alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        <span className='color__gray-2'>Fitness Level:</span> Intermediate
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src="./../images/new/calendar.svg" alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        <span className='color__gray-2'>Schedule:</span> Monday, Friday
                                    </div>
                                </div>

                                <a href="#!" className='btn btn__green shadow w-100 rounded__50 color__black'>Book a Class</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />

            <Footer />
        </div>
    )
}

export default DetailProgram