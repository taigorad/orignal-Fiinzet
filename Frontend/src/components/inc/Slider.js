import React, { useEffect } from "react";
import { Carousel } from "bootstrap"; // Import Bootstrap Carousel
import "../css/slider.css"; // Import your CSS file

import SliderImage1 from "../images/transparent.png";
import SliderImage2 from "../images/transparent.png";
import SliderImage3 from "../images/transparent.png";
import SliderImage4 from "../images/transparent.png";

// import SliderImage1 from "../images/banner.png";
// import SliderImage2 from "../images/banner.png";
// import SliderImage3 from "../images/banner.png";
// import SliderImage4 from "../images/banner.png";
import AdditionalImage from "../images/house.png";
import AdditionalImage2 from "../images/house2.png";
import AdditionalImage3 from "../images/house3.png";
import AdditionalImage4 from "../images/house4.png";
import { Link } from "react-router-dom";
function Slider() {
  const carouselRef = React.useRef(null);

  useEffect(() => {
    // Initialize the Bootstrap Carousel
    const carousel = new Carousel(carouselRef.current, {
      interval: 5000, // Set the desired interval for automatic sliding
    });

    return () => {
      // Dispose of the carousel when the component unmounts
      carousel.dispose();
    };
  }, []);

  return (
    <div className="carousel-container mt-5">
      <div
        id="myCarousel"
        className="carousel slide mb-6 mt-5"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-inner caro-in">
          {/* .............car1........... */}
          <div className="carousel-item caro-item active">
            <div className="carousel-bg"></div>
            <img
              src={SliderImage1}
              alt="Slide 1"
              className="d-block w-100 sliderImg"
            />
            <div className="additional-img-container">
              <img
                src={AdditionalImage}
                alt="Additional Slide 1"
                className="additionalImg"
              />
            </div>
            <div className="carousel-caption caro-cap">
              <h2 className="caro-head">
                <span className="HtextColor">Zero processing fees</span>{" "}
                <span className="textColor textSize HtextFont2">on </span>
                <span className="textColor HtextFont2">Home Loans</span>
              </h2>
              <p className="textColor textFont2">
                turn your homeownership dream into reality today!
              </p>
              <p className="textColor textSize2">T&C apply</p>
              <ul className="textColor alignCSS textFont2">
                <li>3 EMIS Free </li>
                <li>Daily reducing balance</li>
                <li>Easy balance transfer process</li>
                <li>Top-up loans</li>
              </ul>
              <a className="btn btn-primary" href="/Login">
                <Link to="/Login" className="nav-link " aria-current="page">
                  Apply Now
                </Link>
              </a>
            </div>
          </div>
          {/* .............car2........... */}
          <div className="carousel-item caro-item">
            <div className="carousel-bg"></div>
            <img
              src={SliderImage2}
              alt="Slide 2"
              className="d-block w-100 sliderImg"
            />
            <div className="additional-img-container">
              <img
                src={AdditionalImage2}
                alt="Additional Slide 1"
                className="additionalImg"
              />
            </div>
            <div className="carousel-caption caro-cap">
              <h2 className="caro-head">
                <span className="textColor HtextFont2 textSize">
                  Unlock your dream home journey with an
                </span>{" "}
                <span className="HtextColor"> 8.60%</span>
                <span className="HtextColor HtextFont2 textSize">
                  {" "}
                  p.a.
                </span>{" "}
                <span className="textColor HtextFont2 textSize">
                  {" "}
                  interest rate for a home loan!
                </span>
              </h2>
              <p className="textColor textSize2">T&C apply</p>
              {/* <p className="textColor">turn your homeownership dream into reality today!</p> */}
              <ul className="textColor alignCSS textFont2">
                <li>3 EMIS Free </li>
                <li>Daily reducing balance</li>
                <li>Easy balance transfer process</li>
                <li>Top-up loans</li>
              </ul>
              <a className="btn btn-primary" href="/Login">
                <Link to="/Login" className="nav-link " aria-current="page">
                  Apply Now
                </Link>
              </a>
            </div>
          </div>
          {/* .............car3........... */}
          <div className="carousel-item caro-item">
            <div className="carousel-bg"></div>
            <img
              src={SliderImage3}
              alt="Slide 3"
              className="d-block w-100 sliderImg"
            />
            <div className="additional-img-container">
              <img
                src={AdditionalImage3}
                alt="Additional Slide 1"
                className="additionalImg"
              />
            </div>
            <div className="carousel-caption caro-cap">
              <h2 className="caro-head">
                <span className="textColor HtextFont2 textSize">
                  Secure your dream home with
                </span>{" "}
                <span className="HtextColor"> No EMI Till 36 Months </span>
                <span className="textColor HtextFont2 textSize">
                  on your Home Loan!
                </span>
              </h2>
              <p className="textColor textFont2">
                (for under construction project)
              </p>
              <p className="textColor textSize2">T&C apply</p>
              <ul className="textColor alignCSS textFont2">
                <li>3 EMIS Free </li>
                <li>Daily reducing balance</li>
                <li>Easy balance transfer process</li>
                <li>Flexible repayment option</li>
              </ul>
              <a className="btn btn-primary" href="/Login">
                <Link to="/Login" className="nav-link " aria-current="page">
                  Apply Now
                </Link>
              </a>
            </div>
          </div>
          {/* .............car4........... */}
          <div className="carousel-item caro-item">
            <div className="carousel-bg"></div>
            <img
              src={SliderImage4}
              alt="Slide 4"
              className="d-block w-100 sliderImg"
            />
            <div className="additional-img-container">
              <img
                src={AdditionalImage4}
                alt="Additional Slide 1"
                className="additionalImg"
              />
            </div>
            <div className="carousel-caption caro-cap">
              <h2 className="caro-head">
                <span className="textColor HtextFont2">Get a </span>
                <span className="HtextColor">cost-free consultation</span>
              </h2>
              <p className="textColor HtextFont2">
                to explore Home Loan options and Balance Transfer solutions!
              </p>
              <p className="textColor textSize2">T&C apply</p>
              <ul className="textColor alignCSS textFont2">
                <li>End to End process information</li>
                <li>All charges information</li>
              </ul>
              <a className="btn btn-primary" href="/Login">
                <Link to="/Login" className="nav-link " aria-current="page">
                  Apply Now
                </Link>
              </a>
            </div>
          </div>
          {/* ........................ */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="carousel-indicators-container">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            {/* Add more indicators for each carousel item */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Slider;
