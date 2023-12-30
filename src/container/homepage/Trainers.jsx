import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Discover from '../../component/Page/Discover'
import CoreWorks from '../../component/Page/CoreWorks'
import CardTeam from '../../component/Card/CardTeam'

const Trainers = () => {
    const team = [
        {
            img: "./../images/new/trainer (1).png",
            name: "Jakob Curtis",
            job: "Founder & Owners",
            facebook: "#!",
            linkdin: "#!",
            twitter: "#!"
        },
        {
            img: "./../images/new/trainer (2).png",
            name: "Ryan Vetrovs",
            job: "Coach",
            facebook: "#!",
            linkdin: "#!",
            twitter: "#!"
        },
        {
            img: "./../images/new/trainer (3).png",
            name: "Marcus Levin",
            job: "Coach",
            facebook: "#!",
            linkdin: "#!",
            twitter: "#!"
        },
        {
            img: "./../images/new/trainer (4).png",
            name: "Ahmad Saris",
            job: "Coach",
            facebook: "#!",
            linkdin: "#!",
            twitter: "#!"
        },
        {
            img: "./../images/new/trainer (5).png",
            name: "Phillip Mango",
            job: "Coach",
            facebook: "#!",
            linkdin: "#!",
            twitter: "#!"
        },
        {
            img: "./../images/new/trainer (6).png",
            name: "Martin Calzoni",
            job: "Coach",
            facebook: "#!",
            linkdin: "#!",
            twitter: "#!"
        },
    ]
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className='normal font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs'>Meet the <span className='medium'>Team</span></h2>
                        <p className='normal font__size--16 text__16-1024 color__gray-2'>OurPersonal Trainers are experienced and highly qualified – and they’re all ontheir own <br /> inspiring journey too. Click our photos to read more.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="row">
                                {
                                    team.map((obj) => {
                                        return <div className="col-md-6 col-lg-4 mb-4">
                                            <CardTeam data={obj} />
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <CoreWorks />

            <Discover />

            <Footer />
        </div>
    )
}

export default Trainers