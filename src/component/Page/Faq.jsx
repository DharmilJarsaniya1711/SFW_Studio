import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Faq = () => {
    const [Accordion, setAccordion] = useState(1)

    const onClickAccordion = ((i) => {
        if (i == Accordion) {
            setAccordion(0)
        } else {
            setAccordion(i)
        }
    });

    const accordionData = [
        {
            title: "Do I need previous experience for your classes?",
            desc: " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. "
        },
        {
            title: "Do I need previous experience for your classes?",
            desc: " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. "
        },
        {
            title: "How long is the class duration?",
            desc: " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. "
        },
        {
            title: "Do you offer on-site classes, or just virtual classes?",
            desc: " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. "
        },
        {
            title: "Do you offer 1-on-1 classes and personal training?",
            desc: " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. "
        },
    ]
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 my-auto">
                        <h2 className="medium font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs">FAQ<span className='normal'>s</span></h2>
                        <p className='normal font__size--16 text__16-1024 mb-4'>Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada.</p>
                        <NavLink
                            to="/contact" className="medium font__size--16 text__16-1024 btn btn__green color__white shadow rounded__24 color__black mb__5">Book a Class</NavLink>
                    </div>
                    <div className="col-md-7 my-auto">
                        <h4 className='medium font__size--24 text__20-1024 mb-4'>Maybe your question is have been answered, <br /> check this out!</h4>

                        {
                            accordionData.map((obj, i) => {
                                return <div className={"wrapper__accrodion mb-4 " + (Accordion == (i + 1) ? "active" : "")}>
                                    <div className="head pointer" onClick={() => onClickAccordion(i + 1)}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className='medium font__size--20 text__20-1024 mb-0'>{obj.title}</h4>
                                            <div className="arrow flex-shrink-0">
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p className='mb-0 normal font__size--16 text__16-1024 color__gray-2 lh-2'>{obj.desc}</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq