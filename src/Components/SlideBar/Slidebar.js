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
import { Link, useParams } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Slidebar = (props) => {
  const [value, setValue] = React.useState([100, 60000]);
  const [totalLength, setTotallength] = useState([]);
  const [brandFilters, setbrandFilters] = React.useState([]);
  const [ratingArr, setRating] = React.useState([]);
  const [value2, setValue2] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    props.filterBYPrice(newValue[0], newValue[1]);
  };

  let { id } = useParams();
  var ratings = [];
  var brands = [];
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
  }, []);

  useEffect(() => {
    brands = [];
    ratings = [];
    props.currentcatData.length !== 0 &&
      props.currentcatData.map((item, index) => {
        brands.push(item.brand);
        ratings.push(parseFloat(item.rating));
      });

    const BrandList = brands.filter(
      (item, index) => brands.indexOf(item) === index
    );

    setbrandFilters(BrandList);

    const ratingss = ratings.filter(
      (item, index) => ratings.indexOf(item) === index
    );

    setRating(ratingss);
  }, [id]);

  useEffect(() => {
    var price = 0;
    props.currentcatData.length !== 0 &&
      props.currentcatData.map((item, index) => {
        let prodPrice = parseInt(item.price.toString().replace(/,/g, ""));
        if (prodPrice > price) {
          price = prodPrice;
        }
      });

    setValue2(price);

    //setValue(price);
    //filterByPrice(price[0], price[1]);
  }, [props.currentcatData]);

  const filterByBrand = (keyword) => {
    props.filterByBrand(keyword);
  };

  const filterByRating = (keyword) => {
    props.filterByRating(parseFloat(keyword));
  };

  useEffect(() => {
    filterBYPrice(value[0], value[1]);
  }, [value]);

  const filterBYPrice = (minValue, maxValue) => {
    props.filterBYPrice(minValue, maxValue);
  };
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
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Fill By Price</h3>
          <Box sx={{ width: 450 }}>
            <Slider
              min={0}
              step={1}
              max={60000}
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
              From: <strong className="text-success">TK {value[0]}</strong>
            </span>
            <span className="ml-auto priceFrom">
              To: <strong className="text-success">Tk {value[1]}</strong>
            </span>
          </div>

          <div className="filters mb-5">
            <ul className="mb-0">
              <h4>Filter By Brand</h4>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {brandFilters.length !== 0 &&
                    brandFilters.map((item, index) => {
                      return (
                        <li key={index}>
                          {" "}
                          <FormControlLabel
                            value={item}
                            control={
                              <Radio onChange={() => filterByBrand(item)} />
                            }
                            label={item}
                          />
                        </li>
                      );
                    })}
                </RadioGroup>
              </FormControl>
            </ul>
          </div>
          <hr />
          <div className="filters">
            <h5>Filter By Rating</h5>
            <ul>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {ratingArr.length !== 0 &&
                    ratingArr.map((item, index) => {
                      return (
                        <li key={index}>
                          {" "}
                          <FormControlLabel
                            value={item}
                            control={
                              <Radio onChange={() => filterByRating(item)} />
                            }
                            label={item}
                          />
                        </li>
                      );
                    })}
                </RadioGroup>
              </FormControl>
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
