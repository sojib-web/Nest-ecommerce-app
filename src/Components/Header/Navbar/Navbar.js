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
                    <Link>Home</Link>
                  </Button>
                </li>

                {navData.length !== 0 &&
                  navData.map((item, index) => {
                    console.log(item.cat_name);
                  })}

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
                </li> */}

                {/* <li className="list-inline-item">
                  <Button>
                    <Link>
                      Vendors <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/vendor">Vendors Grid</Link>
                        </Button>
                        <Button>
                          <Link to="/vendor"> Vendors List</Link>
                        </Button>
                        <Button>
                          <Link to="/vendor">Vendor Details 01</Link>
                        </Button>
                        <Button>
                          <Link to="/vendor">Vendor Details 02</Link>
                        </Button>
                        <Button>
                          <Link to="/vendor">Vendor Dashboard</Link>
                        </Button>
                        <Button>
                          <Link to="/vendor">Vendor Guide</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="list-inline-item position-static">
                  <Button>
                    <Link>
                      {" "}
                      Mega menu <KeyboardArrowDownIcon />
                    </Link>
                  </Button>

                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h4 className="text-g">Fruit & Vegetables</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to=""> Meat & Poultry </Link>
                          </li>
                          <li>
                            <Link to=""> Fresh Vegetables </Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings </Link>
                          </li>
                          <li>
                            <Link to=""> Cuts & Sprouts </Link>
                          </li>
                          <li>
                            <Link to=""> Exotic Fruits & Veggies </Link>
                          </li>
                          <li>
                            <Link to=""> Packaged Produce </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Breakfast & Dairy</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to=""> Meat & Poultry </Link>
                          </li>
                          <li>
                            <Link to=""> Fresh Vegetables </Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings </Link>
                          </li>
                          <li>
                            <Link to=""> Cuts & Sprouts </Link>
                          </li>
                          <li>
                            <Link to=""> Exotic Fruits & Veggies </Link>
                          </li>
                          <li>
                            <Link to=""> Packaged Produce </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Meat & Seafood</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to=""> Meat & Poultry </Link>
                          </li>
                          <li>
                            <Link to=""> Fresh Vegetables </Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings </Link>
                          </li>
                          <li>
                            <Link to=""> Cuts & Sprouts </Link>
                          </li>
                          <li>
                            <Link to=""> Exotic Fruits & Veggies </Link>
                          </li>
                          <li>
                            <Link to=""> Packaged Produce </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img src={image} alt="" className="w-100"></img>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
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
                </li>

                <li className="list-inline-item">
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
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li> */}
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
