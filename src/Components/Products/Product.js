import React, { useEffect } from "react";
import "./Product.css";
import ProductImg from "../../Assets/images/product-3.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState } from "react";

const Product = (props) => {
  const [productData, setProductData] = useState();

  useEffect(() => {
    setProductData(props.item);
  }, [props.item]);

  const setProductCat = () => {
    sessionStorage.setItem("parentCat", productData.parentCatName);
    sessionStorage.setItem("subCatName", productData.subCatName);
  };
  return (
    <div className="ProductThum" onClick={setProductCat}>
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      {productData !== undefined && (
        <>
          <Link to={`/product/${productData.id}`}>
            <div className="imgWrapper">
              <div className="p-4 wrapper mb-3 wrapper">
                <img src={productData.catImg} className="w-100" alt="" />
              </div>
              <div className="overlay transition">
                <ul className="list list-inline mb-0">
                  <li className="list list-inline-item">
                    <a className="cursor" tooltip="Compare">
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </li>
                  <li className="list list-inline-item">
                    <a className="cursor" tooltip="Add To Wishlist">
                      <CompareArrowsOutlinedIcon />
                    </a>
                  </li>
                  <li className="list list-inline-item">
                    <a className="cursor" tooltip="View">
                      <RemoveRedEyeOutlinedIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <div className="info">
            <span className="d-block catName">{productData.brand} </span>
            <h4 className="title">
              <Link>{productData.productName.substr(0, 20) + "..."}</Link>
            </h4>
            <Rating
              name="half-rating"
              defaultValue={parseFloat(productData.rating)}
              precision={0.5}
            />

            <span className="Brand d-block">
              By{" "}
              <a className="text-g">
                <Link className="text-g">{productData.brand} </Link>
              </a>
            </span>

            <div className=" d-flex align-items-center mt-3">
              <div className=" align-items-center" />
              <span className="price text-g font-weight-bold">
                $ {productData.price}
              </span>
              <span className="oldPrice">$ {productData.oldPrice}</span>
              <Button className="transition">
                <ShoppingCartOutlinedIcon className="btnIcon" />
                Add
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
