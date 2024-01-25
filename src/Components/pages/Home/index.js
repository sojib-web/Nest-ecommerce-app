import React from "react";
import SliderBanner from "./Silder/Silder";
import CatSlider from "../../CatSlider/CatSlider";
import Banner from "../../Banner/Banner";
import "./index.css";
import Product from "../../Products/Product";
import bannerImg from "../../../Assets/images/banner 2.jpg";
import Slider from "react-slick";

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    fade: false,
    arrows: true,
  };
  return (
    <div>
      <SliderBanner />
      <CatSlider />
      <Banner />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0 ">Popular Products</h2>
            <ul className=" list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">ALL</a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Milks & Dairies </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Coffes & Teas </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Pet Foods </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Meats </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Vegetables </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Fruits </a>
              </li>
            </ul>
          </div>

          <div className=" row productRow">
            <div className="item">
              <Product tag="hot" />
            </div>

            <div className="item">
              <Product tag="new" />
            </div>

            <div className="item">
              <Product tag="sale" />
            </div>

            <div className="item">
              <Product tag="hot" />
            </div>

            <div className="item">
              <Product tag="best" />
            </div>

            <div className="item">
              <Product tag="new" />
            </div>

            <div className="item">
              <Product tag="sale" />
            </div>

            <div className="item">
              <Product tag="hot" />
            </div>

            <div className="item">
              <Product tag="best" />
            </div>

            <div className="item">
              <Product tag="new" />
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0 ">Daily Best Sells</h2>
            <ul className=" list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">Featured </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Popular </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor"> new addedd </a>
              </li>
            </ul>
          </div>
        </div>
        <br /> <br />
        <div className="row">
          <div className="col-md-3">
            <img src={bannerImg} alt="" className="w-100" />
          </div>
          <div className="col-md-9">
            <Slider {...settings} className="productSlider">
              <Product tag="hot" />
              <Product tag="hot" />
              <Product tag="hot" />
              <Product tag="hot" />
              <Product tag="hot" />
              <Product tag="hot" />
              <Product tag="hot" />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
