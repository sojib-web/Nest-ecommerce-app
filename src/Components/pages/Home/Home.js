import React, { useEffect, useRef, useState } from "react";
import SliderBanner from "./Silder/Silder";
import CatSlider from "../../CatSlider/CatSlider";
import Banner from "../../Banner/Banner";
import "./Home.css";
import Product from "../../Products/Product";
import bannerImg from "../../../Assets/images/banner 2.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts/TopProducts";
import { Link } from "react-router-dom";
import { MyContext } from "../../../App";
import { useContext } from "react";

const Home = (props) => {
  const [productData, setprodData] = useState(props.data);
  const [catArry, setCatArry] = useState([]);
  const [activeTab, setactivetab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);

  const [BestSells, setBestSell] = useState([]);

  const [isLoadingProduct, setisLoadingProduct] = useState(false);
  const context = useContext(MyContext);

  const settings = {
    dots: false,
    infinite: context.windowWidth < 992 ? false : true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth < 992 ? false : true,
  };
  const catArr = [];

  useEffect(() => {
    productData.length !== 0 &&
      productData.map((item) => {
        // console.log(item);
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
        item.items.map((innerItem, index_) => {
          if (innerItem.cat_name === activeTab) {
            innerItem.products.length !== 0 &&
              innerItem.products.map((product) => {
                arr.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: innerItem.cat_name,
                });
              });
            setActiveTabData(arr);
            setTimeout(() => {
              setisLoadingProduct(false);
            }, [1000]);
          }
        });
      });
    // console.log(arr);
  }, [activeTab, activeTabData]);

  // console.log(activeTabData);

  const BestSellsArry = [];
  useEffect(() => {
    productData.length !== 0 &&
      productData.map((item, index) => {
        if (item.cat_name === "Fashion") {
          item.items.length !== 0 &&
            item.items.map((InnerItem, index) => {
              InnerItem.products.length !== 0 &&
                InnerItem.products.map((InnerProducts, InnerIndex) => {
                  BestSellsArry.push(InnerProducts);
                });
            });
        }
      });
    setBestSell(BestSellsArry);
  }, []);

  useEffect(() => { }, [isLoadingProduct]);

  return (
    <div>
      <SliderBanner />
      <CatSlider data={productData} />
      <Banner />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center homeProductsTitleWrapper ">
            <h2 className="hd mb-0 mt-0 res_full ">Popular Products</h2>
            <ul className=" list list-inline ml-auto filterTab mb-0 res_full">
              {catArry.length !== 0 &&
                catArry.map((item, index) => {
                  // console.log(item)
                  return (
                    <li className="list-inline-item">
                      <Link
                        className={`cursor text-capitalize ${activeTabIndex === index ? "act" : ""
                          }`}
                        onClick={() => {
                          // setActiveTabData([]);
                          setactivetab(item);
                          setactiveTabIndex(index);
                          setisLoadingProduct(true);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div
            className={`productRow ${isLoadingProduct === true && "loading"}`}
          >
            {activeTabData.length !== 0 &&
              activeTabData.map((item, index) => {
                // console.log(item);
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
            <ul className=" list list-inline ml-auto filterTab mb-0"></ul>
          </div>
          <br className="responsive_hide" /> <br className="responsive_hide" />
          <div className="row">
            <div className="col-md-3 sliderbannerImage responsive_hide">
              <img src={bannerImg} alt="" className="w-100" />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="productSlider">
                {BestSells.length !== 0 &&
                  BestSells.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <Product tag={item.type} item={item} />
                      </div>
                    );
                  })}
                {/* <div className="item">
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
                </div> */}
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
