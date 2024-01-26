import React from "react";
import SliderBanner from "./Silder/Silder";
import CatSlider from "../../CatSlider/CatSlider";
import Banner from "../../Banner/Banner";
import "./Home.css";
import Product from "../../Products/Product";
import bannerImg from "../../../Assets/images/banner 2.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts/TopProducts";
import NewsImg from '../../../Assets/images/banner-9.png'
import NewsLetter from "../../NewsLetter/NewsLetter";
import Footer from "../../Footer/Footer";


const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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


      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0 ">Daily Best Sells</h2>
            <ul className=" list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">Featured </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Popular  </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">New addd </a>
              </li>
            </ul>
          </div>

          <br /> <br />
          <div className="row">
            <div className="col-md-3 sliderbannerImage">
              <img src={bannerImg} alt="" className="w-100" />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="productSlider">
                <div className="item">
                  <Product tag="new" />
                </div>

                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>

                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
              </Slider>
            </div>
          </div>


        </div>
      </section>
      {/* topProductsSection */}
      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Trending Products" />
            </div>

            <div className="col">
              <TopProducts title="Recently added" />
            </div>

            <div className="col">
              <TopProducts title="Trending Products" />
            </div>
            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </section>


      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily
                <br /> needs from our shop </h2>
              <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
              <NewsLetter />
            </div>
            <div className="img">
              <img src={NewsImg} alt="" className=" img w-100" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default Home;
