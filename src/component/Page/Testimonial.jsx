import React from 'react'
import SliderTestimonial from '../Slider/SliderTestimonial'

const Testimonial = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center mb-5">
                    <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Review</div>

                    <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm">What Our Happy <br />
                        Clients Say</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <SliderTestimonial />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial