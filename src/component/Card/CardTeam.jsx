import React from 'react'

const CardTeam = (props) => {
    return (
        <div className="wrapper__card-team">
            <div className="profile">
                <img src={props.data.img} alt="" />
            </div>
            <div className="desc text-center">
                <h4 className='medium font__size--24 text__24-1024 mb-0'>{props.data.name}</h4>
                <p className='normal font__size--14 text__14-1024 my-1'>{props.data.job}</p>
                <div className="d-flex align-items-center justify-content-center">
                    <a href={props.data.facebook}>
                        <img src="./../images/sos (1).png" alt="" />
                    </a>
                    <a href={props.data.linkdin} className='mx-2'>
                        <img src="./../images/sos (3).png" alt="" />
                    </a>
                    <a href={props.data.twitter}>
                        <img src="./../images/sos (4).png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardTeam