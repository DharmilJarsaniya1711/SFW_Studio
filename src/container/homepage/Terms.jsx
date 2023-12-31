import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'

const Terms = () => {
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <h2 className='normal font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs '><span className='medium'>Terms Of</span> Service</h2>
                    <p className='normal font__size--16 text__16-1024 color__gray-2 mb-5'>Last updated November 28, 2022</p>

                    <div className="mb-5">
                        <h3 className='medium font__size--32 text__32-1024 text__32-xs mb-3'>Agreement to term</h3>
                        <p className='medium font__size--16 text__16-1024 mb-3'>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Fitplan, Inc. ("Company," “we," “us," or “our”), concerning your access to and use of the https://www.company.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). We are registered in California, United States and have our registered office at 401 30th St., NEWPORT BEACH, CA 92663. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
                        <p className='medium font__size--16 text__16-1024 mb-3'>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</p>
                        <p className='medium font__size--16 text__16-1024 mb-3'>The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
                        <p className='medium font__size--16 text__16-1024 mb-3'>The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
                        <p className='medium font__size--16 text__16-1024 mb-3'>The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.</p>
                    </div>


                    <h3 className='medium font__size--32 text__32-1024 text__32-xs mb-3'>Intellectual Properthy Right</h3>
                    <p className='medium font__size--16 text__16-1024 mb-3'>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                    <p className='medium font__size--16 text__16-1024 mb-3'>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Terms