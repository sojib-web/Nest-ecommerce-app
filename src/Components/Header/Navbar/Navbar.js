import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import image from "../../../Assets/images/banner-menu.png";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [navData, setnavData] = useState([]);

  useEffect(() => {
    setnavData(props.data);
  }, []);

  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className="bg-g text-white catTab">
              <AppsOutlinedIcon /> &nbsp; Browse All Categories &nbsp;
              <KeyboardArrowDownIcon />
            </Button>
          </div>

          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link to={"/"}>Home</Link>
                  </Button>
                </li>
                {navData.length !== 0 &&
                  navData.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                      <Button>
                        <a
                          href={`/cat/${
                            item.cat_name ? item.cat_name.toLowerCase() : ""
                          }`}
                          onClick={() =>
                            sessionStorage.setItem(
                              "cat",
                              item.cat_name.toLowerCase()
                            )
                          }
                        >
                          {item.cat_name}
                        </a>
                      </Button>
                      {item.items && item.items.length !== 0 && (
                        <div className="dropdown_menu">
                          <ul>
                            {item.items.map((innerItem, innerIndex) => (
                              <li key={innerIndex}>
                                <Button>
                                  <a
                                    href={`/cat/${innerItem.cat_name.toLowerCase()}/${innerItem.cat_name.replace(
                                      /\s/g,
                                      "-"
                                    )}`}
                                    onClick={() =>
                                      sessionStorage.setItem(
                                        "cat",
                                        item.cat_name.toLowerCase()
                                      )
                                    }
                                  >
                                    {innerItem.cat_name}
                                  </a>
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}

                {/* Shop star */}

                {/* <li className="list-inline-item">
                  <Button>
                    <Link>
                      Shop <KeyboardArrowDownIcon />
                    </Link>
                  </Button>

                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/shop">Shop - Wide</Link>
                        </Button>
                        <Button>
                          <Link to="/shop">Single Product </Link>
                        </Button>
                        <Button>
                          <Link to="/shop">Shop – Filter </Link>
                        </Button>
                        <Button>
                          <Link to="/shop">Shop – Wishlist</Link>
                        </Button>
                        <Button>
                          <Link to="/shop"> Shop – Cart</Link>
                        </Button>
                        <Button>
                          <Link to="/shop">Shop - Single</Link>
                        </Button>
                        <Button>
                          <Link to="/shop">shop – Checkout</Link>
                        </Button>
                        <Button>
                          <Link to="/shop">Shop – Compare</Link>
                        </Button>
                        <Button>
                          <Link to="/shop"> Shop Invoice</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>  */}

                {/* megam=Menu statrt  */}
                <li className="list-inline-item position-static">
                  <Button>
                    <Link to={"/megaMenu"}>
                      Mega menu <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      {props.data.length !== 0 &&
                        props.data.map((item, index) => {
                          return (
                            <div className="col" key={index}>
                              {item.cat_name && (
                                <a href={`/cat/${item.cat_name.toLowerCase()}`}>
                                  <h4 className="text-g text-capitalize">
                                    {item.cat_name}
                                  </h4>
                                </a>
                              )}
                              {item.items && item.items.length !== 0 && (
                                <ul className="mt-4 mb-0">
                                  {item.items.map((innerItem, innerIndex) => (
                                    <li key={innerIndex}>
                                      {innerItem.cat_name && (
                                        <a
                                          onClick={props.closeNav}
                                          href={`/cat/${item.cat_name.toLowerCase()}/${innerItem.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                        >
                                          {innerItem.cat_name}
                                        </a>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}

                      <div className="col">
                        <img src={image} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </li>

                {/* blog start */}
                {/* <li className="list-inline-item">
                  <Button>
                    <Link>
                      Blog <KeyboardArrowDownIcon />{" "}
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/blog">Blog Category Grid </Link>
                        </Button>
                        <Button>
                          <Link to="/blog">Blog Category List</Link>
                        </Button>
                        <Button>
                          <Link to="/blog">Blog Category Big</Link>
                        </Button>
                        <Button>
                          <Link to="/blog"> Blog Category Wide</Link>
                        </Button>
                        <Button>
                          <Link to="/blog">Blog Category small</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li> */}

                {/* Pages start */}
                {/* <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Forget Password</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Reset Password</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Purchase Guide</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                        <Button>
                          <Link to="/about">Terms of Service</Link>
                        </Button>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li> */}

                {/* Contact start  */}

                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="Phon d-flex align-items-center ml-auto">
              <span>
                <HeadphonesOutlinedIcon />
              </span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900-888</h3>
                <p className="mb-0"> 24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
