import React from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <Navbar type={"dark"} />

      <section>
        <div className="container">
          <h1 className="medium font__size--72 text__70-1024 text__70-md text__70-sm text__70-xxs">
            Let's get <span className="normal">in touch!</span>
          </h1>
          <p className="normal font__size--16 text__16-1024 color__gray-2 mb-3">
            Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,{" "}
            <br /> viverra urna imperdiet non malesuada.
          </p>

          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-group">
                <label
                  htmlFor=""
                  className="medium font__size--14 text__14-1024 color__black w-100"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="medium font__size--16 text__16-1024 text__16-1024 color__gray-2 form-control wrapper__input-field"
                  placeholder="What’s your Name?"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor=""
                  className="medium font__size--14 text__14-1024 color__black w-100"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="medium font__size--16 text__16-1024 text__16-1024 color__gray-2 form-control wrapper__input-field"
                  placeholder="What’s your Email?"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor=""
                  className="medium font__size--14 text__14-1024 color__black w-100"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="medium font__size--16 text__16-1024 text__16-1024 color__gray-2 form-control wrapper__input-field"
                  placeholder="What’s your Phone?"
                />
              </div>
              <div className="form-group mb-4 mb-lg-5">
                <label
                  htmlFor=""
                  className="medium font__size--14 text__14-1024 color__black w-100"
                >
                  Message
                </label>
                <textarea
                  className="medium font__size--16 text__16-1024 text__16-1024 color__gray-2 form-control wrapper__input-field textarea"
                  placeholder="Write your message..."
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="text-right">
                <a
                  href="#!"
                  className="btn btn__green shadow rounded__50 color__black d-inline-block medium text__16-1024"
                >
                  Send Message
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="wrapper__card-detail-program">
                <h4 className="semi-bold font__size--18 text__18-1024 mb-2">
                  Contact Details
                </h4>
                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">
                  Fill up the form and our team will get back to you with in 24
                  hours.
                </p>

                <div className="d-flex mb-3 align-items-center">
                  <img src="./../images/new/ic (1).png" alt="" />
                  <div className="ml-2 medium font__size--16 text__16-1024 color__black">
                    <a href="tel:+919898362004" className="text-dark">
                      {" "}
                      +91 98983 62004{" "}
                    </a>{" "}
                  </div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <img src="./../images/new/ic (3).png" alt="" />
                  <div className="ml-2 medium font__size--16 text__16-1024 color__black">
                    <a
                      href="mailto:sales@devoqdesign.com"
                      className=" text-dark"
                    >
                      sales@devoqdesign.com
                    </a>{" "}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./../images/new/ic (2).png" alt="" />
                  <div className="ml-2 medium font__size--16 text__16-1024 color__black">
                    111, Platinum Plaza Opp. I.O.C. petrol pump, Bodakdev,
                    Ahmedabad - 380054{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
