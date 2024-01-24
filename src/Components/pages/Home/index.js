import React from "react";
import Slider from "./Silder/Silder";
import CatSlider from "../../CatSlider/CatSlider";
import Banner from "../../Banner/Banner";
import "./index.css";
import Product from "../../Products/Product";
const Index = () => {
  return (
    <div>
      <Slider />
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
    </div>
  );
};

export default Index;
