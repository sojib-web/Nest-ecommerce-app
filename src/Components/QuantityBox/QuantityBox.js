import React, { useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const QuantityBox = () => {
  const [inputValue, setInputvalue] = useState(1);

  const plus = () => {
    setInputvalue(inputValue + 1);
  };

  const minus = () => {
    if (inputValue !== 1) {
      setInputvalue(inputValue - 1);
    }
  };
  return (
    <>
      <div className="addcartSection pt-4 pb-4 d-flex align-items-center">
        <div className="counterSection mr-2">
          <input type="number" value={inputValue}></input>
          <span className=" arrow plus" onClick={plus}>
            <KeyboardArrowUpOutlinedIcon />
          </span>
          <span className=" arrow minus" onClick={minus}>
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default QuantityBox;
