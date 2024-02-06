import React, { useEffect, useState } from "react";
import "../ListingProduct/ListingProduct.css";
import Breadcrum from "../../../Components/BreadCrum/BreadCrum";
import Slidebar from "../../SlideBar/Slidebar";
import Product from "../../Products/Product";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const ListingProduct = (props) => {
  const [isOpenDropDwon, setisopenDown] = useState(false);
  const [isOpenDropDwon2, setisopenDown2] = useState(false);
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
        } else {
          item.items.length !== 0 &&
            item.items.map((itemsA, index) => {
              if (
                itemsA.cat_name.split(" ").join("-").toLowerCase() ===
                id.toLowerCase()
              ) {
                itemsA.products.length !== 0 &&
                  itemsA.products.map((product) => {
                    itemsData.push(product);
                  });
              }
            });
        }
      });
    const list = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(list);
  }, [id]);

  return (
    <div>
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadcrumb flex-column">
            <h2>Snack</h2>
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Link to={"/"}>Home</Link>
              </li>
              props.single === true && (
              <li className="list-inline-item">
                <Link
                  to={`/${sessionStorage.getItem("cat")}`}
                  className="text-capitalize"
                >
                  {sessionStorage.getItem("cat")}
                </Link>
              </li>
              )
              {props.single === false && (
                <li className="list-inline-item">
                  <Link to={`/${id}`} className="text-capitalize">
                    {id}{" "}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="listingData ">
            <div className="row">
              <div className="col-md-3 slidebarWrapper">
                {Data.length !== 0 && (
                  <Slidebar data={props.data} currentcatData={Data} />
                )}
              </div>

              <div className="col-md-9 rightCounter homeProducts pt-0">
                <div className="topStrip d-flex align-items-center">
                  <p className="mb-0">
                    We found <span className="text-success">{Data.length}</span>{" "}
                    items for you
                  </p>
                  <div className="ml-auto d-flex align-items-center Listbtn">
                    <div className="tab_ position-relative">
                      <Button
                        className="btn_ "
                        onClick={() => setisopenDown(!isOpenDropDwon)}
                      >
                        Show: 50
                      </Button>
                      {isOpenDropDwon !== false && (
                        <ul className="dropdownMenu">
                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>

                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>

                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="tab_ ml-5 position-relative">
                      <Button
                        className="btn_ "
                        onClick={() => setisopenDown2(!isOpenDropDwon2)}
                      >
                        jvbbvj
                      </Button>
                      {isOpenDropDwon2 !== false && (
                        <ul className="dropdownMenu">
                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>

                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>

                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center">
                              my account
                            </Button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="productRow pl-4 pr-3">
                  {Data.length !== 0 &&
                    Data.map((item, index) => {
                      return (
                        <div className="item" key={index}>
                          <Product tag={item.type} item={item} />
                        </div>
                      );
                    })}
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
