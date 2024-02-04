import React, { useEffect, useState } from "react";
import SliderBanner from "./Silder/Silder";
import CatSlider from "../../CatSlider/CatSlider";
import Banner from "../../Banner/Banner";
import "./Home.css";
import Product from "../../Products/Product";
import bannerImg from "../../../Assets/images/banner 2.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts/TopProducts";

const Home = (props) => {
  const [productData, setprodData] = useState(props.data);
  const [catArry, setCatArry] = useState([]);
  const [activeTab, setactivetab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  const catArr = [];

  useEffect(() => {
    productData.length !== 0 &&
      productData.map((item) => {
        console.log(item);
        item.items.length !== 0 &&
          item.items.map((items_) => {
            // console.log(items_.cat_name);
            catArr.push(items_.cat_name);
          });
      });
    const list2 = catArr.filter(
      (item, index) => catArr.indexOf(item) === index
    );
    setCatArry(list2);
    setactivetab(list2[0]);
  }, [productData]);

  useEffect(() => {
    var arr = [];
    setActiveTabData(arr);
    productData.length !== 0 &&
      productData.map((item, index) => {
        item.items.map((item_, index_) => {
          if (item.cat_name === activeTab) {
            setActiveTabData(item_.products);
          }
        });
      });
  }, [activeTab, activeTabData]);

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
              {catArry.length !== 0 &&
                catArry.map((item, index) => {
                  return (
                    <li className="list-inline-item">
                      <a
                        className={`cursor text-capitalize ${
                          activeTabIndex === index ? "act" : ""
                        }`}
                        onClick={() => {
                          setactiveTabIndex(index);
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="productRow">
            {activeTabData.length !== 0 &&
              activeTabData.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <Product tag={item.type} item={item} />
                  </div>
                );
              })}
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
                <a className="cursor">Popular </a>
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
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>

                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="hot" />
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
    </div>
  );
};

export default Home;
