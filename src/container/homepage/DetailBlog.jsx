import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Discover from '../../component/Page/Discover'

const DetailBlog = () => {
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 mb-4 mb-md-0">
                            <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Resource Center</div>

                            <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm mb-0">The 5 effective fitness morning routines you should follow</h2>
                        </div>
                        <div className="col-md-4 mt-auto">
                            <div className="wrapper__sosmed-blog d-flex align-items-center justify-content-md-end">
                                <a href="#!">
                                    <img src="./../images/new/sos (1).png" alt="" />
                                </a>
                                <a href="#!">
                                    <img src="./../images/new/sos (4).png" alt="" />
                                </a>
                                <a href="#!">
                                    <img src="./../images/new/sos (3).png" alt="" />
                                </a>
                                <a href="#!">
                                    <img src="./../images/new/sos (2).png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <img src="./../images/new/blog_detail.png" className='images__blog-detail mb-4' alt="" />

                            <p className='normal font__size--18 text__18-1024 mb-4'>Porta purus vel volutpat id facilisis sem. Rhoncus vitae potenti tellus maecenas pellentesque viverra suspendisse. Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. </p>

                            <div className="wrapper__head-blog mb-4 position-relative">
                                <h3 className='mb-0 ml-5 medium font__size--20 text__20-1024'>
                                    Cristofer Geidt <span className='emdium font__size--16 text__16-1024 color__gray-1'>Training Coach</span>
                                </h3>
                            </div>

                            <p className='normal font__size--18 text__18-1024 mb-4'>A porta sed nunc amet dolor pharetra. Posuere interdum semper duis semper id. Sem sit sed sapien hendrerit phasellus non. Venenatis lectus lectus vulputate in lacus arcu. Pharetra lacus diam faucibus sapien ac egestas purus vehicula odio. Volutpat justo purus eu tortor.
                            </p>

                            <p className='normal font__size--18 text__18-1024 mb-4'>Porta purus vel volutpat id facilisis sem. Rhoncus vitae potenti tellus maecenas pellentesque viverra suspendisse. Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.
                            </p>

                            <p className='normal font__size--18 text__18-1024 mb-4'>Viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et. Suspendisse feugiat scelerisque et, viverra urna imperdiet.Vitae interdum quis lacus ut viverra.
                            </p>
                            <ol className='normal font__size--18 text__18-1024 mb-5 pl-3'>
                                <li className='mb-3'>Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</li>
                                <li className='mb-3'>Nunc semper velit netus donec commodo.</li>
                                <li>Lacus hendrerit aliquam habitant eget faucibus venenatis turpis.</li>
                            </ol>

                            <div className="wrapper__detail-blog-user">
                                <div className="d-flex align-items-start justify-content-center">
                                    <img src="./../images/new/quote-up.png" className='object-fit-content' alt="" />
                                    <div className="desc ml-3">
                                        <p className='medium font__size--14 text__14-1024 color__gray-3 mb-2'>Training Coach</p>
                                        <h3 className='normal font__size--24 text__24-1024 mb-4'>Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. </h3>

                                        <div className="d-flex align-items-center user">
                                            <img src="./../images/new/Ellipse 1.png" alt="" />
                                            <div className="ml-3">
                                                <h5 className='medium font__size--16 text__16-1024 mb-1'>Wilson Dorwart</h5>
                                                <p className='normal font__size--14 text__14-1024 mb-0'>Training Coach</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="wrapper__latest-article">
                                <h3 className='medium font__size--24 text__24-1024 mb-4'>Latest articles</h3>

                                <a href="#!" className='d-inline-block w-100 mb-4 color__black'>
                                    <div className="medium font__size--14 text__14-1024 color__black btn__tag mb-3">Resource Center</div>
                                    <h4 className='medium font__size--24 text__24-1024 mb-3'>The 5 effective fitness morning routines you should follow</h4>
                                    <p className='mb-0 medium font__size--14 text__14-1024 color__gray-3'>Juni 27, 2022</p>
                                </a>
                                <a href="#!" className='d-inline-block w-100 mb-4 color__black'>
                                    <div className="medium font__size--14 text__14-1024 color__black btn__tag mb-3">Health</div>
                                    <h4 className='medium font__size--24 text__24-1024 mb-3'>8 innovative design ideas to make your resume pop</h4>
                                    <p className='mb-0 medium font__size--14 text__14-1024 color__gray-3'>Juni 27, 2022</p>
                                </a>
                                <a href="#!" className='d-inline-block w-100 mb-4 color__black'>
                                    <div className="medium font__size--14 text__14-1024 color__black btn__tag mb-3">Fitness</div>
                                    <h4 className='medium font__size--24 text__24-1024 mb-3'>14 strength-specific training exercises you can do today</h4>
                                    <p className='mb-0 medium font__size--14 text__14-1024 color__gray-3'>Juni 27, 2022</p>
                                </a>

                                <h3 className='medium font__size--24 text__24-1024 mb-4'>Categories</h3>

                                <a href="#!" className='mb-4 color__black d-flex align-items-center justify-content-between w-100'>
                                    <h5 className='mb-0 medium font__size--20 text__20-1024'>Fitness</h5>
                                    <img src="./../images/new/arrow-right (1).png" alt="" />
                                </a>
                                <a href="#!" className='mb-4 color__black d-flex align-items-center justify-content-between w-100'>
                                    <h5 className='mb-0 medium font__size--20 text__20-1024'>Health</h5>
                                    <img src="./../images/new/arrow-right (1).png" alt="" />
                                </a>
                                <a href="#!" className='mb-4 color__black d-flex align-items-center justify-content-between w-100'>
                                    <h5 className='mb-0 medium font__size--20 text__20-1024'>Recipes</h5>
                                    <img src="./../images/new/arrow-right (1).png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Discover />

            <Footer />
        </div>
    )
}

export default DetailBlog