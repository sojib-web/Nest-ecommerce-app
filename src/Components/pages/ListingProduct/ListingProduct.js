import React, { useEffect, useState } from "react";
import "../ListingProduct/ListingProduct.css";
import Breadcrum from "../../../Components/BreadCrum/BreadCrum";
import Slidebar from "../../SlideBar/Slidebar";
import Product from "../../Products/Product";
import { useParams } from "react-router-dom";

const ListingProduct = (props) => {
  const [Data, setData] = useState([]);

  const { id } = useParams();

  var itemsData = [];

  useEffect(() => {
    props.data.length !== 0 &&
      props.data.map((item) => {
        if (props.single === true) {
          if (item.cat_name.toLowerCase() === id.toLowerCase()) {
            item.items.length !== 0 &&
              item.items.map((items_) => {
                items_.products.length !== 0 &&
                  items_.products.map((product) => {
                    itemsData.push(product);
                  });
              });
          }
        }
      });
    const list = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(list);
  }, []);

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
                  {Data.length !== 0 &&
                    Data.map((item, index) => {
                      return (
                        <div className="item" key={index}>
                          <Product tag={item.type} item={item} />
                        </div>
                      );
                    })}

                  {/* <div className="item">
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
                  </div> */}
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
