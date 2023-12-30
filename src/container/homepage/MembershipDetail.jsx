import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Testimonial from '../../component/Page/Testimonial'

const MembershipDetail = () => {
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-xl-6">
                            <h2 className='medium font__szie--72 text__70-1024 text__70-md text__70-sm text__70-xxs'>Basic <span className='normal'>Plan</span></h2>
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

                            <div className="mb-4">
                                <h4 className='medium font__size--24 text__24-1024'>About the plan</h4>
                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2'>Diam ante tortor diam mauris. Feugiat fames in et neque. Sem mollis sagittis id bibendum vitae magna risus. Feugiat adipiscing gravida bibendum adipiscing vel fermentum potenti. Mus ipsum consequat morbi aenean orci mauris integer eu. Purus accumsan non a ut aliquet volutpat leo. At vitae porttitor blandit porta. Pretium sed tempor vestibulum sit urna. Potenti purus sodales in enim nunc. In et auctor fusce sit donec condimentum. Diam ultrices enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi fermentum amet dui ullamcorper praesent elit. Viverra nam massa cursus leo blandit eget eu. Tempor enim neque metus nunc sodales at eros. Malesuada placerat vestibulum amet sit tempor mi dignissim. Feugiat nullam urna gravida vulputate mi eleifend laoreet. Nunc facilisis egestas faucibus eget suspendisse. In id pulvinar sem lectus lectus eu. Aliquam elementum semper faucibus volutpat facilisis mi.</p>
                            </div>

                            <div className="mb-4">
                                <h4 className='medium font__size--24 text__24-1024'>Is this the right package for me?</h4>
                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2 mb-1'>Consectetur adipiscing elit. Odio amet egestas dignissim eu nunc. Id pulvinar enim volutpat tellus. Cras tellus ac dui at sed.</p>

                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2 mb-1'>Viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et. Suspendisse feugiat <span className='color__blue fw__5'>scelerisque</span> et, viverra urna imperdiet.Vitae interdum quis lacus ut viverra. </p>

                                <ol className='normal font__size--18 text__18-1024 color__gray-2 pl-3'>
                                    <li>Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</li>
                                    <li>Nunc semper velit netus donec commodo.</li>
                                    <li>Lacus hendrerit aliquam habitant eget faucibus venenatis turpis</li>
                                </ol>
                            </div>


                            {/* <div className="mb-4">
                                <h4 className='medium font__size--24 text__24-1024'>How can I take a trial class?</h4>
                                <p className='normal font__size--18 text__18-1024 color__gray-2 lh-2'>Diam ultrices enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi fermentum amet dui ullamcorper praesent elit. Viverra nam massa cursus leo blandit eget eu. Tempor enim neque metus nunc sodales at eros. Malesuada placerat vestibulum amet sit tempor mi dignissim. Feugiat nullam urna gravida vulputate mi eleifend laoreet. </p>
                            </div> */}


                        </div>
                        <div className="col-lg-4">
                            <div className="wrapper__card-detail-program">
                                <h4 className='semi-bold font__size--18 text__18-1024 mb-2'>Get your package</h4>
                                <p className='normal font__size--16 text__16-1024 color__gray-2 mb-4'>Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada.</p>

                                <h5 className='medium font__size--16 text__16-1024 mb-3'>What’s Includes:</h5>

                                <div className="d-flex mb-3">
                                    <img src="./../images/new/Icon.svg" alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        8 classes per month
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <img src="./../images/new/Icon.svg" alt="" />
                                    <div className='ml-2 medium font__size--16 text__16-1024 color__black'>
                                        All in basic package
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src="./../images/new/Icon.svg" alt="" />
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

                                <h3 className='medium font__size--40 text__40-1024 text__40-md text__40-mm mb-3'>$149.00<span className='normal font__size--14 text__14-1024 color__gray-1'>/Month</span></h3>

                                <a href="#!" className='text__16-1024 btn btn__green shadow w-100 rounded__50 color__black mb-3'>Purchase Now</a>
                                <a href="#!" className='text__16-1024 btn btn__outlined--black no__opacity shadow w-100 rounded__50 color__black '>Add to Chart</a>
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

export default MembershipDetail