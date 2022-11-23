import React from "react";
import logo from "../assests/logo.png";
function Contact() {
  return (
    <div className="container-center-horizontal">
      <div className="contact-us screen">
        <div className="overlap-group1">
          <div className="overlap-gropu2">
            <div className="rectangle-12"></div>
            <h1 className="title opensans-bold-white-150px">
              <span className=" opensans-bold-white-150px">CONTACT US</span>
            </h1>

            <img src={logo} alt="logo" srcset="" />

            <div className="faq opensans-bold-downy-25px">
              <span className=" opensans-bold-downy-25px">FAQ</span>
            </div>
            <img src="" className="image-5" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
