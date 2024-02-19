import React, { useEffect, useState } from "react";
import "./CatSlider.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { MyContext } from "../../App";
import { useContext } from "react";

const CatSlider = (props) => {
  const [allData, setAlldata] = useState(props.data);
  const [totalLength, setTotallength] = useState([]);
  const context = useContext(MyContext);

  const [itemBg, setItemBg] = useState([
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
  ]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth > 992 ? true : false,
    autoplay: context.windowWidth > 992 ? 2000 : false,
    centerMode: context.windowWidth > 992 ? true : false,
  };

  var catLength = 0;
  var lengthArray = [];
  useEffect(() => {
    allData.length !== 0 &&
      allData.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length;
          });
        lengthArray.push(catLength);
        // console.log(catLength);
        catLength = 0;
      });
    const list = lengthArray.filter(
      (item, index) => lengthArray.indexOf(item) === index
    );
    setTotallength(list);
    // console.log(list);
  });

  return (
    <div>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          {/* all name golo show korte hobe  */}
          {/* <div className="listItem">
            <ul className=" list list-inline ml-auto filterTab">
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
          </div> */}
          <Slider {...settings} className="cat_slider_main">
            {allData.length !== 0 &&
              allData.map((allItem, index) => {
                return (
                  <div className="item" key={index}>
                    <Link to={`/cat/${allItem.cat_name.toLowerCase()}`}>
                      <div
                        className="info"
                        style={{ background: itemBg[index] }}
                      >
                        <img src={allItem.image} alt="" width="80" />
                        <h4 className="text-capitalize mt-3">
                          {allItem.cat_name}
                        </h4>
                        <span>{totalLength[index]} items</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CatSlider;
