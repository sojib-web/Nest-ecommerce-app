import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const QuantityBox = (props) => {
  // const [cartItems, setCartItems] = useState([]);

  const [inputValue, setInputValue] = useState(props.item?.quantity || 1);
  // useEffect(() => {
  //   setCartItems(props.cartItems);
  //   // setInputvalue(props.item.quantity);
  // }, [props.cartItems]);

  // const updateCart = (items) => {
  //   setCartItems(items);
  // };

  // const plus = () => {
  //   setInputvalue(inputValue + 1);
  // };

  // const minus = () => {
  //   if (inputValue !== 1) {
  //     setInputvalue(inputValue - 1);
  //   }
  // };

  const incrementQuantity = () => {
    const newValue = inputValue + 1;
    setInputValue(newValue);
    updateCartItem(newValue);
  };

  const decrementQuantity = () => {
    if (inputValue > 1) {
      const newValue = inputValue - 1;
      setInputValue(newValue);
      updateCartItem(newValue);
    }
  };

  const updateCartItem = (newQuantity) => {
    if (!props.item) {
      return;
    }
    const updatedItems = props.cartItems.map((item, index) => {
      return index === parseInt(props.index)
        ? { ...item, quantity: newQuantity }
        : item;
    });
    props.updateCart(updatedItems);
  };
  return (
    <>
      <div className="addcartSection pt-4 pb-4 d-flex align-items-center">
        <div className="counterSection mr-2">
          <input type="number" value={inputValue}></input>
          <span className=" arrow plus" onClick={incrementQuantity}>
            <KeyboardArrowUpOutlinedIcon />
          </span>
          <span className=" arrow minus" onClick={decrementQuantity}>
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default QuantityBox;
