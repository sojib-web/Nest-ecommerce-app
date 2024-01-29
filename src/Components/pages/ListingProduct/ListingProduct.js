import React from "react";
import "../ListingProduct/ListingProduct.css";
import Breadcrum from "../../../Components/BreadCrum/BreadCrum";
import Slidebar from "../../SlideBar/Slidebar";
import Product from "../../Products/Product";
const ListingProduct = () => {
  return (
    <div>
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadcrumb">
            <h2>Snack</h2>
            <Breadcrum />
          </div>
          <div className="listingData ">
            <div className="row">
              <div className="col-md-3 slidebarWrapper">
                <Slidebar />
              </div>
              <div className="col-md-9 rightCounter homeProducts pt-0">
                <div className="productRow">
                  <div className="item">
                    <Product />
                  </div>

                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>

                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingProduct;
