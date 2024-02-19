import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Silder.css";
import Slider1 from "../../../../Assets/images/slider-1.png";
import Slider2 from "../../../../Assets/images/slider-2.png";
import NewsLetter from "../../../NewsLetter/NewsLetter";
import { MyContext } from "../../../../App";
import { useContext } from "react";

const Silder = () => {
  const context = useContext(MyContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: context.windowWidth > 992 ? true : false,
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
        {context.windowWidth > 992 && <NewsLetter />}
      </div>
    </section>
  );
};

export default Silder;
