import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import image from "../../../Assets/images/banner-menu.png";

import { Link } from "react-router-dom";
import { MyContext } from "../../../App";
import { useContext } from "react";

const Navbar = (props) => {
  const [navData, setnavData] = useState([]);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    setnavData(props.data);
  }, []);

  useEffect(() => {
    setIsOpenNavbar(props.openNav);
  }, [props.openNav]);

  const context = useContext(MyContext);
  return (
    <>
      {isOpenNavbar === true && (
        <div className="navbarOverlay" onClick={props.closeNav}></div>
      )}
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab responsive_hide">
                <AppsOutlinedIcon /> &nbsp; Browse All Categories &nbsp;
                <KeyboardArrowDownIcon />
              </Button>
            </div>

            <div className="col-sm-8 part2 position-static">
              <nav className={isOpenNavbar === true ? "open" : ""}>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button onClick={props.closeNav}>
                      <Link to={"/"}>Home</Link>
                    </Button>
                  </li>
                  {navData.length !== 0 &&
                    navData.map((item, index) => (
                      <li className="list-inline-item" key={index}>
                        <Button onClick={props.closeNav}>
                          <Link
                            to={`/cat/${
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
                          </Link>
                        </Button>
                        {item.items && item.items.length !== 0 && (
                          <div className="dropdown_menu">
                            <ul>
                              {item.items.map((innerItem, innerIndex) => (
                                <li key={innerIndex}>
                                  <Button onClick={props.closeNav}>
                                    <Link
                                      to={`/cat/${innerItem.cat_name.toLowerCase()}/${innerItem.cat_name.replace(
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
                                    </Link>
                                  </Button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}

                  {/* megam=Menu statrt  */}
                  <li className="list-inline-item position-static">
                    <Button onClick={props.closeNav}>
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
                                  <a
                                    href={`/cat/${item.cat_name.toLowerCase()}`}
                                  >
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

                  {/* Contact start  */}

                  <li className="list-inline-item">
                    <Button onClick={props.closeNav}>
                      <Link>Contact</Link>
                    </Button>
                  </li>
                </ul>
                {windowWidth < 992 && (
                  <>
                    {context.isLogin !== "true" && (
                      <div className="pl-3 pr-3">
                        <br />
                        <Link to={"/SignIn"}>
                          <Button
                            onClick={props.closeNav}
                            className="btn-g btn-lg w-100"
                          >
                            Sign In
                          </Button>
                        </Link>
                      </div>
                    )}
                  </>
                )}
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
    </>
  );
};

export default Navbar;
