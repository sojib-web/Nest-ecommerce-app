import React from "react";
import "./Product.css";
import ProductImg from "../../Assets/images/product-16.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Product = () => {
  return (
    <div className="ProductThum">
      <Link>
        {" "}
        <div className="imgWrapper">
          <img src={ProductImg} alt="" className="w-100" />
        </div>
      </Link>
      <div className="info">
        <span className="d-block catName">Snack </span>
        <h4 className="title">
          <Link> Foster Farms Takeout Crispy Classic Buffalo Wings</Link>
        </h4>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

        <span className="Brand d-block">
          By
          <a className="text-g">
            <Link className="text-g">NestFood</Link>
          </a>
        </span>

        <div className="d-flex align-items-center mt-3">
          <span className="price text-g font-weight-bold">$28.85</span>
          <span className="oldPrice">$40</span>
          <Button className="transition">
            <ShoppingCartOutlinedIcon className="btnIcon" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
