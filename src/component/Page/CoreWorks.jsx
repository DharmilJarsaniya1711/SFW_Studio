import React from 'react'

const CoreWorks = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center mb-5">
                    {/* <div className="medium font__size--14 text__14-1024 btn__tag mb-3">Programs</div> */}
                    <div className="text-center mb-5">
                            <h2 className="medium font__size--48 text__48-1024 text__48-md text__48-sm text__48-xx">My Core Work Values</h2>
                            <p className="normal font__size--16 text__16-1024 color__gray-2">Consectetur adipiscing elit. Odio amet egestasolm dignissim <br/>eu nunc. Id pulvinar enim volutpat tellus. </p>
                        </div>
                    {/* <h2 className="medium font__size--40 text__40-1024 text__40-md text__40-mm">Browse Our Available <br /> Programs</h2> */}
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-11 col-xl-9">
                        <div className="row wrapper__wrap-info">
                            <div className="items col-md-4">
                                <img src="./../images/new/fitness-biceps.svg" className="mb-4" alt="" />
                                <h5 className="medium font__size--20 text__20-1024">Commitment</h5>
                                <p className="normal font__size--16 text__16-1024 color__gray-2">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                            </div>
                            <div className="items bg__blue col-md-4">
                                <img src="./../images/new/heart-checkmark-light.svg" className="mb-4" alt="" />
                                <h5 className="medium font__size--20 text__20-1024 color__white">Motivation</h5>
                                <p className="normal font__size--16 text__16-1024 color__gray-1">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                            </div>
                            <div className="items col-md-4">
                                <img src="./../images/new/star-shining.svg" className="mb-4" alt="" />
                                <h5 className="medium font__size--20 text__20-1024">Passion</h5>
                                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreWorks