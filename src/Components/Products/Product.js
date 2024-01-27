import React from "react";
import "./Product.css";
import ProductImg from "../../Assets/images/product-3.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
const Product = (props) => {
  return (
    <div className="ProductThum">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      <Link>
        {" "}
        <div className="imgWrapper">
          <img src={ProductImg} alt="" className="w-100" />
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
        <span className="d-block catName">Snack </span>
        <h4 className="title">
          <Link> Foster Farms Takeout Crispy Classic Buffalo Wings</Link>
        </h4>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

        <span className="Brand d-block">
          By{" "}
          <a className="text-g">
            <Link className="text-g">NestFood</Link>
          </a>
        </span>

        <div className=" d-flex align-items-center mt-3">
          <div className=" align-items-center" />
          <span className="price text-g font-weight-bold">$28.85</span>
          <span className="oldPrice">$40</span>
        </div>
        <Button className="transition">
          <ShoppingCartOutlinedIcon className="btnIcon" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default Product;
