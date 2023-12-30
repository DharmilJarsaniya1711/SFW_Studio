import React from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'

const Privacy = () => {
    return (
        <div className="overflow-hidden">
            <Navbar type={"dark"} />

            <section>
                <div className="container">
                    <h2 className='normal font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs'><span className='medium'>Privacy</span> Policy</h2>
                    <p className='normal font__size--16 text__16-1024 color__gray-2 mb-5'>Last updated November 28, 2022</p>

                    <h3 className='medium font__size--32 text__32-1024 text__32-xs mb-3'>What information do we collect?</h3>
                    <p className='medium font__size--16 text__16-1024 mb-3'>Personal information you disclose to us</p>

                    <p className='medium font__size--16 text__16-1024 mb-0'>In Short: We collect personal information that you provide to us.</p>
                    <p className='normal font__size--16 text__16-1024 mb-3'>In Short: We collect personal information that you provide to us.
                        We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul className='normal font__size--16 text__16-1024 pl-3 mb-3'>
                        <li>names</li>
                        <li>email addresses</li>
                        <li>usernames</li>
                        <li>passwords</li>
                        <li>debit/credit card numbers</li>
                        <li>billing addresses</li>
                        <li>phone numbers</li>
                    </ul>

                    <p className='normal font__size--16 text__16-1024 mb-3'><span className='medium'>Payment Data:</span> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: https://company.com/privacy.</p>

                    <p className='normal font__size--16 text__16-1024 mb-3'><span className='medium'>Social Media Login Data:</span> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.</p>

                    <p className='normal font__size--16 text__16-1024 mb-3'>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                    <p className='medium font__size--16 text__16-1024 mb-3'>Information automatically collected</p>

                    <p className='normal font__size--16 text__16-1024 mb-3'><span className='medium'>In Short:</span> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>

                    <p className='normal font__size--16 text__16-1024 mb-3'>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

                    <p className='normal font__size--16 text__16-1024 mb-0'>Like many businesses, we also collect information through cookies and similar technologies.</p>
                    <p className='normal font__size--16 text__16-1024 mb-0'>The information we collect includes:</p>
                    <ul className='normal font__size--16 text__16-1024 pl-3 mb-3'>
                        <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
                        <li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                        <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                    </ul>


                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Privacy