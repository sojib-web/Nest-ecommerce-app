import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const QuantityBox = (props) => {
  const [inputValue, setInputvalue] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(props.cartItems);
    // setInputvalue(props.item.quantity);
  }, [props.cartItems]);

  const updateCart = (items) => {
    setCartItems(items);
  };

  // const plus = () => {
  //   setInputvalue(inputValue + 1);
  // };

  // const minus = () => {
  //   if (inputValue !== 1) {
  //     setInputvalue(inputValue - 1);
  //   }
  // };
  return (
    <>
      <div className="addcartSection pt-4 pb-4 d-flex align-items-center">
        <div className="counterSection mr-2">
          <input type="number" value={inputValue}></input>
          <span
            className=" arrow plus"
            onClick={() => {
              setInputvalue(inputValue + 1);
              const innerCart = props.cartItems?.map((cartItem, key) => {
                return key === parseInt(props.index)
                  ? { ...cartItem, quantity: inputValue + 1 }
                  : { ...cartItem };
              });
              updateCart(innerCart);
              setCartItems(innerCart);
            }}
          >
            <KeyboardArrowUpOutlinedIcon />
          </span>
          <span className=" arrow minus">
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default QuantityBox;
