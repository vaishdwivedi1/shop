import React from "react";
import "./Home.css";
import logo from "../assests/logo.png";
import limited from "../assests/limited.png";
import indoor from "../assests/indoor.png";
import outdoor from "../assests/outdoor.png";
import popular from "../assests/popular.png";
import Header from "./Header";
function Home1() {
  return (
    <div className="home">
      {/* left */}

      <div className="left">
        <div className="home_logo">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="welocome_text">
            <span className="welocome_text">WELCOME</span>
          </h1>
        </div>
      </div>

      {/* middle */}
      <Header />

      <div className="texts">
        <h1 className="main">What would you like to shop?</h1>
        <p className="second">
          The most customised plants decoration you ever seen. Pick up yours in
          3 simple steps.
        </p>
      </div>

      {/* right */}

      <div className="right">
        <div className="flex-col-1">
          <div className="flex-row-1">
            <div className="search"></div>
          </div>

          <div className="outdoor flex-row-1">
            <img src={outdoor} className="outdoorImg" alt="" srcset="" />
            <span className="outdoorText">Outdoor</span>{" "}
          </div>

          <div className="flex-row-2">
            <img src={limited} className="limitedImg" alt="" srcset="" />
            <div className="limited">
              <span className="limitedText limited">Limited</span>{" "}
            </div>
          </div>
        </div>

        <div className="images_texts flex-col-1 flex-col-item">
          <div className="first_imgText flex-row-1">
            <div className="indoor">
              <img src={indoor} className="indoorImg" alt="" srcset="" />
              <span className="indoorText">Indoor</span>{" "}
            </div>
            <div className="popular flex-row-2">
              <img src={popular} className="popularImg" alt="" srcset="" />
              <span className="popularText">Popular</span>{" "}
            </div>
          </div>
          <div className="second_imgText flex-col-2">
            <div className="outdoor flex-row-1">
              <img src={outdoor} className="outdoorImg" alt="" srcset="" />
              <span className="outdoorText">Outdoor</span>{" "}
            </div>
            <div className="limited">
              <img src={limited} className="limitedImg" alt="" srcset="" />
              <span className="limitedText">Limited</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
