import React, { useState, useEffect } from "react";
import "../SlideBar/Slidebar.css";
import CatImg from "../../Assets/images/category-1.svg";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FilterImg from "../../Assets/images/fillter-widget-bg.png";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import CatImg1 from "../../Assets/images/1.jpg";
import { Link } from "react-router-dom";
function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Slidebar = (props) => {
  const [value, setValue] = React.useState([0, 1000]);
  const [totalLength, setTotallength] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var catLength = 0;
  var lengthArray = [];
  useEffect(() => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length;
          });
        lengthArray.push(catLength);
        // console.log(catLength);
        catLength = 0;
      });
    const list = lengthArray.filter(
      (item, index) => lengthArray.indexOf(item) === index
    );
    setTotallength(list);
    // console.log(list);
  });

  return (
    <div>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>

          <div className="catlist">
            {props.data.length !== 0 &&
              props.data.map((item, index) => {
                return (
                  <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                    <div className="catItem d-flex align-items-center">
                      <span className="img">
                        <img src={CatImg} alt="" width={40} />
                      </span>
                      <h4 className="mb-0 ml-3 mr-3">{item.cat_name}</h4>
                      <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                        {totalLength[index]}
                      </span>
                    </div>
                  </Link>
                );
              })}
            {/* <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={CatImg} alt="" width={40} />
              </span>
              <h4 className="mb-0 ml-3 mr-3"> Milks & Dairie</h4>
              <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={CatImg} alt="" width={40} />
              </span>
              <h4 className="mb-0 ml-3 mr-3"> Milks & Dairie</h4>
              <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={CatImg} alt="" width={40} />
              </span>
              <h4 className="mb-0 ml-3 mr-3"> Milks & Dairie</h4>
              <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={CatImg} alt="" width={40} />
              </span>
              <h4 className="mb-0 ml-3 mr-3"> Milks & Dairie</h4>
              <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={CatImg} alt="" width={40} />
              </span>
              <h4 className="mb-0 ml-3 mr-3"> Milks & Dairie</h4>
              <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={CatImg} alt="" width={40} />
              </span>
              <h4 className="mb-0 ml-3 mr-3"> Milks & Dairie</h4>
              <span className="d-flex align-items-center   justify-content-center rounded-circle m-auto">
                30
              </span>
            </div> */}
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Fill By Price</h3>
          <Box sx={{ width: 300 }}>
            <Slider
              min={0}
              step={1}
              max={1000}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="success"
            />
          </Box>

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success">${value[0]}</strong>
            </span>
            <span className="ml-auto">
              To: <strong className="text-success">${value[1]}</strong>
            </span>
          </div>

          <div className="filters mb-0">
            <h5>Color</h5>
            <ul>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
            </ul>
          </div>
          <hr />
          <div className="filters">
            <h5>Item Condition</h5>
            <ul>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
            </ul>
          </div>

          <div className="filters d-flex">
            <div className="button ">
              <Button size="small">
                <FilterAltOffOutlinedIcon />
                Filter
              </Button>
            </div>
            <Link>
              {" "}
              <img src={FilterImg} alt="" width={100} />
            </Link>
          </div>
        </div>
        <Link>
          {" "}
          <img src={CatImg1} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
