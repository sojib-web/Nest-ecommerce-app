import React from "react";
import Slider from "react-slick";
import "./Silder.css";
import Slider1 from "../../../../Assets/images/slider-1.png";
import Slider2 from "../../../../Assets/images/slider-2.png";

import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Silder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };
  return (
    <section className="homeSilder">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_main">
          <div className="item">
            <img src={Slider1} alt="" className="w-100" />
            <div className="info">
              <h2 className="display-2 mb-40">
                Don’t miss amazing <br />
                grocery deals{" "}
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="item">
            <img src={Slider2} alt="" className="w-100" />
            <div className="info">
              <h2 className="display-2 mb-40">
                Fresh Vegetables <br />
                Big discount{" "}
              </h2>
              <p>Save up to 50% off on your first order</p>
            </div>
          </div>
        </Slider>
        <div className="newsletterBanner">
          <SendOutlinedIcon />
          <input type="text" placeholder=" Your email address..." />
          <Button className="bg-g">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default Silder;
