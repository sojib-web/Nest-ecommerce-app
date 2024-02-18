/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "../Header/Header.css";
import Logo from "../../Assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Selectdrop from "../selectDrop/SelectDrop";
import axios from "axios";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import IconCompare from "../../Assets/images/icon-compare.svg";
import HeartIcon from "../../Assets/images/icon-heart.svg";
import CartIcon from "../../Assets/images/icon-cart.svg";
import AccoutIcon from "../../Assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
const Header = (props) => {
  // console.log(props);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isopenSearch, setOpenSearch] = useState(false);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const headerRef = useRef();
  const searchInput = useRef();

  const context = useContext(MyContext);
  const history = useNavigate();

  const [categories] = useState([
    "Milks and Dairies",
    "Clothing & beauty",
    "Pet Foods & Toy",
    "Fresh Fruit",
    "Milks and Dairies",
    "Clothing & beauty",
    "Wines & Drinks",
    "Fresh Seafood",
    "Fast food",
    "Vegetables",
    "Bread and Juice",
    "Wines & Drinks",
    "Fresh Seafood",
  ]);

  const countryList = [];

  // ...

  useEffect(() => {
    // alert(windowWidth);
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data.data;

      if (data !== null) {
        data.forEach((item) => {
          countryList.push(item.country);
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  const signOut = () => {
    context.signOut();
    history("/");
  };

  const openSearch = () => {
    setOpenSearch(true);
    // console.log(openSearch);
    searchInput.current.focus();
  };

  const CloseSearch = () => {
    setOpenSearch(false);
    // console.log(openSearch);
    searchInput.current.blur();
    searchInput.current.value = "";
  };

  const openNav = () => {
    setIsOpenNavbar(true);
  };

  const closeNav = () => {
    setIsOpenNavbar(false);
  };
  return (
    <>
      <div className="headerWrraper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 d-flex part1 align-items-center logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>

                {windowWidth < 992 && (
                  <div className="counrtyWrapper">
                    <Selectdrop
                      data={countryList}
                      placeholder={"Your Location"}
                      icon={<EditLocationIcon style={{ opacity: "0.5" }} />}
                    />
                  </div>
                )}
                {windowWidth < 992 && (
                  <div className=" navbarToggle d-flex align-items-center">
                    <div className="location" onClick={openSearch}>
                      <SearchIcon />
                    </div>

                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-item">
                        <span>
                          <Link to={"/cart"}>
                            {" "}
                            <img src={CartIcon} alt="" />
                            <span className="badge bg-success rounded-circle">
                              {context.cartItems.length}
                            </span>
                          </Link>
                        </span>
                      </li>
                    </ul>

                    <div className="location " onClick={openNav}>
                      <MenuIcon />
                    </div>

                    {context.isLogin === "true" && (
                      <div className="myAccDrop ">
                        <PermIdentityOutlinedIcon />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Headersearch Start here */}
              <div className="col-sm-5 part2">
                <div
                  className={`headerSearch d-flex align-items-center ${
                    isopenSearch === true ? "open" : ""
                  }`}
                >
                  {windowWidth < 992 && (
                    <div className="closeSearch" onClick={CloseSearch}>
                      <ArrowBackIosOutlinedIcon />
                    </div>
                  )}
                  <Selectdrop
                    data={categories}
                    placeholder={"ALL Categories"}
                    icon={false}
                  />

                  <div className="search">
                    <input
                      type="text"
                      placeholder="Serach for items..."
                      ref={searchInput}
                    />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* Headersearch Start here */}
              <div className="col-sm-5 part3  d-flex align-items-center">
                <div className="ml-auto d-flex align-items-center">
                  <div className="counrtyWrapper">
                    <Selectdrop
                      data={countryList}
                      placeholder={"Your Location"}
                      icon={<EditLocationIcon style={{ opacity: "0.5" }} />}
                    />
                  </div>
                  <ClickAwayListener
                    onClickAway={() => setIsOpenDropDown(false)}
                  >
                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-item">
                        <span>
                          <img src={IconCompare} alt="" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Compare
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <img src={HeartIcon} alt="" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Wishlist
                        </span>
                      </li>

                      <li className="list-inline-item">
                        <span>
                          <Link to={"/cart"}>
                            {" "}
                            <img src={CartIcon} alt="" />
                            <span className="badge bg-success rounded-circle">
                              {context.cartItems.length}
                            </span>
                          </Link>
                          Cart
                        </span>
                      </li>
                      {context.isLogin === "true" ? (
                        <li className="list-inline-item">
                          <span
                            onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                          >
                            <img src={AccoutIcon} alt="" />
                            Account
                          </span>

                          {isOpenDropDown !== false && (
                            <ul className="dropdownMenu">
                              <li>
                                <Button className="align-items-center">
                                  <Person2OutlinedIcon /> My Account
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  {" "}
                                  <LocalShippingOutlinedIcon /> Order Tracking
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <FavoriteBorderOutlinedIcon /> My Wishlist
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <SettingsOutlinedIcon /> Setting
                                </Button>
                              </li>
                              <li>
                                <Button onClick={signOut}>
                                  <LogoutOutlinedIcon /> Sign out
                                </Button>
                              </li>
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li className="list-inline-item">
                          <Link to={"/SignIn"}>
                            <Button className=" btns btn-g">Sign In</Button>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navbar data={props.data} openNav={isOpenNavbar} closeNav={closeNav} />
        {/* data={props.data}  */}
      </div>
      <div className="afterHeader"></div>
    </>
  );
};

export default Header;
