import React from "react";
import "./Banner.css";
import Banner1 from "../../Assets/images/1.jpg";
import Banner2 from "../../Assets/images/2.jpg";
import Banner3 from "../../Assets/images/3.jpg";
const Banner = () => {
  return (
    <div className="BannerSection">
      <div className="container-fulid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={Banner1} alt="" className="w-100 transition" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <img src={Banner2} alt="" className="w-100 transition" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <img src={Banner3} alt="" className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
