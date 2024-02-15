import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
// import img from "../../../Assets/images/cat-9.png";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import axios from "axios";
import QuantityBox from "../../QuantityBox/QuantityBox";
import { useContext } from "react";
import { MyContext } from "../../../App";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const context = useContext(MyContext);

  // useEffect(() => {
  //   getCartData("http://localhost:5000/cartItems");
  // }, []);

  // const getCartData = async (url) => {
  //   try {
  //     await axios.get(url).then((response) => {
  //       setCartItems(response.data);
  //       // console.log(response.data);
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const deleteItem = async (id) => {
  //   const response = await axios.delete(
  //     `http://localhost:5000/cartItems/${id}`
  //   );
  //   if (response !== null) {
  //     getCartData("http://localhost:5000/cartItems");
  //     context.removeItemsFromCart(id);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cartItems");
      console.log(response.data);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cartItems/${id}`);
      console.log("Post deleted:", id);
      setCartItems(cartItems.map((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const emptyCart = () => {
    let response = null;
    cartItems.length !== 0 &&
      cartItems.map((item) => {
        response = axios.delete(
          `http://localhost:5000/cartItems/${parseInt(item.id)}`
        );
      });
    if (response !== null) {
      fetchData("http://localhost:5000/cartItems");
      context.emptyCart();
    }
  };
  const updateCart = (items) => {
    setCartItems(items);
  };

  return (
    <>
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to={"/"}>Home </Link>
            </li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <section className="cartSection mb-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Your cart</h1>
                  <p>
                    There are <span className="text-g">{cartItems.length}</span>{" "}
                    products in your Cart
                  </p>
                </div>
                <span
                  className="clearCart d-flex align-items-center"
                  onClick={() => emptyCart()}
                >
                  <DeleteSweepOutlinedIcon />
                  Clear Cart
                </span>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length !== 0 &&
                        cartItems.map((item, index) => {
                          return (
                            <tr>
                              <td width={"50%"}>
                                <div className="d-flex align-items-center">
                                  <Link to={`/product/${item.id}`}>
                                    <div className="img">
                                      <img
                                        // + "im=Resize=(400,400)"
                                        src={item.catImg}
                                        alt=""
                                        className="w-100"
                                      />
                                    </div>
                                  </Link>
                                  <div className="info ">
                                    <Link to={`/product/${item.id}`}>
                                      <h4>{item.productName}</h4>
                                    </Link>

                                    <Rating
                                      name="half-rating"
                                      defaultValue={parseFloat(item.rating)}
                                      precision={0.5}
                                    />
                                    <span className="">
                                      {parseFloat(item.rating)}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td width={"20%"}>
                                <span className="">
                                  TK: {parseInt(item.price.split(",").join(""))}
                                </span>
                              </td>
                              <td>
                                <QuantityBox
                                  item={item}
                                  cartItems={cartItems}
                                  index={index}
                                  updateCart={updateCart}
                                />
                              </td>
                              <td>
                                <span className="text-g">
                                  TK:
                                  {parseInt(item.price.split(",").join("")) *
                                    parseInt(item.quantity)}
                                </span>
                              </td>
                              <td>
                                <span
                                  className="clearCart d-flex align-items-center"
                                  onClick={() => deletePost(item.id)}
                                >
                                  <DeleteSweepOutlinedIcon />
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>

                  <div className="btnLink">
                    <Link to={"/"}>
                      <div className="btn-sss d-flex align-items-center">
                        <Button className="btn-g">
                          {" "}
                          <KeyboardBackspaceOutlinedIcon />
                          Continue Shopping
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* //col-md-5 start */}
            <div className="col-md-5 cartRightBox">
              <div className="cart2">
                <div className="cart">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0">Subtotal</h5>
                    <h3 className="ml-auto font-weight-bold clearCart2">
                      <span className="text-g ">
                        TK:
                        {cartItems.length !== 0 &&
                          cartItems
                            .map(
                              (item) =>
                                parseInt(item.price.split(",").join("")) *
                                item.quantity
                            )
                            .reduce((total, value) => total + value, 0)}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="cart ">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0">Shipping</h5>
                    <h3 className="ml-auto font-weight-bold clearCart2">
                      <span>Free</span>
                    </h3>
                  </div>
                </div>

                <div className="cart">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0">Location For </h5>
                    <h3 className="ml-auto font-weight-bold clearCart2">
                      <span>Bangladeh</span>
                    </h3>
                  </div>
                </div>
                <div className="cart">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0">Total</h5>
                    <h3 className="ml-auto font-weight-bold clearCart2">
                      <span className="text-g ">
                        TK:{" "}
                        {cartItems.length !== 0 &&
                          cartItems
                            .map(
                              (item) =>
                                parseInt(item.price.split(",").join("")) *
                                item.quantity
                            )
                            .reduce((total, value) => total + value, 0)}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="btn-ss d-flex align-items-center">
                  <Button className="btn-g btn-lg">Proced to CheckOut</Button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
