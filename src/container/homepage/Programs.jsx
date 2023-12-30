import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Faq from '../../component/Page/Faq'
import Program from '../../component/Page/Program'
import Testimonial from '../../component/Page/Testimonial'

const Programs = () => {
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Programs</div>

                        <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm">Browse Our Available <br /> Programs</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <Program />
                        </div>
                    </div>
                </div>
            </section>

            <Faq />

            <Testimonial />

            <Footer />
        </div>
    )
}

export default Programs