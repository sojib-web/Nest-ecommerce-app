import React, { useEffect, useState } from "react";
import "../ListingProduct/ListingProduct.css";
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
        // single page
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

  const filterByBrand = (keyword) => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        //page == single cat
        if (props.single === true) {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              item_.products.map((item__, index__) => {
                if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                  //console.log(item__)
                  itemsData.push({
                    ...item__,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            });
        }
        //page == double cat
        else {
          item.items.length !== 0 &&
            item.items.map((item_, index_) => {
              // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
              if (
                item_.cat_name.split(" ").join("-").toLowerCase() ==
                id.split(" ").join("-").toLowerCase()
              ) {
                item_.products.map((item__, index__) => {
                  if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                    itemsData.push({
                      ...item__,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  }
                });
              }
            });
        }
      });

    const filterByBrandList = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    //console.log(itemsData)

    setData(filterByBrandList);

    window.scrollTo(0, 0);
  };

  const filterBYPrice = (minValue, maxValue) => {
    props.data.length !== 0 &&
      props.data.map((item) => {
        // single page
        if (props.single === true) {
          if (id === item.cat_name.toLowerCase()) {
            item.items.length !== 0 &&
              item.items.map((items_) => {
                items_.products.length !== 0 &&
                  items_.products.map((product) => {
                    let price = parseInt(
                      product.price.toString().replace(/,/g, "")
                    );
                    if (minValue <= price && maxValue >= price) {
                      itemsData.push({
                        ...product,
                        parentCatName: item.cat_name,
                        subCatName: item.cat_name,
                      });
                    }
                  });
              });
          }
        } else {
          item.items.length !== 0 &&
            item.items.map((item_, index_) => {
              if (
                item_.cat_name.split("").join("-").toLowerCase() ==
                id.split("").join("-").toLowerCase()
              ) {
                item_.products.map((product) => {
                  let price = parseInt(
                    product.price.toString().replace(/,/g, "")
                  );
                  if (minValue <= price && maxValue >= price) {
                    itemsData.push({
                      ...product,
                      parentCatName: item.cat_name,
                      subCatName: item.cat_name,
                    });
                  }
                });
              }
            });
        }
      });
    const filterBYPriceList = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(filterBYPriceList);
  };

  const filterByRating = (keyword) => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        //page == single cat
        if (props.single === true) {
          item.items.length !== 0 &&
            item.items.map((items_) => {
              let rating = parseFloat(items_.rating);
              if (rating === keyword) {
                itemsData.push({
                  ...items_,
                  parentCatName: item.cat_name,
                  subCatName: items_.cat_name,
                });
              }
            });
        }
        //page == double cat
        else {
          item.items.length !== 0 &&
            item.items.map((item_, index_) => {
              // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
              if (
                item_.cat_name.split(" ").join("-").toLowerCase() ==
                id.split(" ").join("-").toLowerCase()
              ) {
                item_.products.map((item__, index__) => {
                  let rating = parseFloat(item__.rating);
                  if (rating === keyword) {
                    itemsData.push({
                      ...item__,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  }
                });
              }
            });
        }
      });

    const filterByRatingList = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(filterByRatingList);

    // Data?.map((item) => {
    //   if (item.rating === keyword) {
    //     itemsData.push({
    //       ...item,
    //       parentCatName: item.cat_name,
    //       subCatName: item.cat_name,
    //     });
    //   }
    // });

    const list3 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(list3);

    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadcrumb flex-column">
            <h2 className="text-capitalize">{sessionStorage.getItem("cat")}</h2>
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Link to={"/"}>Home</Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to={`/cat/${sessionStorage.getItem("cat")}`}
                  className="text-capitalize"
                >
                  {sessionStorage.getItem("cat")}
                </Link>
              </li>

              {props.single === false && (
                <li className="list-inline-item text-capitalize">{id}</li>
              )}
            </ul>
          </div>
          <div className="listingData ">
            <div className="row">
              <div className="col-md-3 slidebarWrapper">
                {Data.length !== 0 && (
                  <Slidebar
                    data={props.data}
                    currentcatData={Data}
                    filterByBrand={filterByBrand}
                    filterBYPrice={filterBYPrice}
                    filterByRating={filterByRating}
                  />
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
