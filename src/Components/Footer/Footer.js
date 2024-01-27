import React from "react";
import "./Footer.css";
import Icon1 from "../../Assets/images/icon-1.svg";
import Icon2 from "../../Assets/images/icon-2.svg";
import Icon3 from "../../Assets/images/icon-3.svg";
import Icon4 from "../../Assets/images/icon-4.svg";
import Icon5 from "../../Assets/images/icon-5.svg";
import FooterLogo from "../../Assets/images/logo (1).svg";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AppleLogo from "../../Assets/images/app-store.jpg";
import PaymentImg from "../../Assets/images/payment-method.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import NewsImg from "../../Assets/images/banner-9.png";
import NewsLetter from "../NewsLetter/NewsLetter";
const Footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily
                <br /> needs from our shop{" "}
              </h2>
              <p>
                Start You'r Daily Shopping with <span>Nest Mart</span>
              </p>
              <NewsLetter />
            </div>
            <div className="img">
              <img src={NewsImg} alt="" className=" img w-100" />
            </div>
          </div>
        </div>
      </section>
      <div className="footerWrapper">
        <div className="footerbases">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} alt="" />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} alt="" />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} alt="" />
                  </span>
                  <div className="info">
                    <h4> Free delivery</h4>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} alt="" />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} alt="" />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <hr />
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link>
                  {" "}
                  <img src={FooterLogo} alt="" />
                </Link>
                <br /> <br />
                <p className="text">Awesome grocery store website template</p>
                <br />
                <div className="footerElement">
                  <p className="footerText">
                    {" "}
                    <LocationOnOutlinedIcon /> <strong>Address: </strong>5171 W
                    Campbell Ave undefined Kent, United States
                  </p>
                  <p className="footerText">
                    {" "}
                    <HeadphonesOutlinedIcon /> <strong>Call Us: </strong> (+91)
                    - 540-025-124553
                  </p>
                  <p className="footerText">
                    {" "}
                    <SendOutlinedIcon /> <strong>Email: </strong>sale@Nest.com
                  </p>
                  <p className="footerText">
                    {" "}
                    <AccessTimeOutlinedIcon /> <strong>Hours: </strong>10:00 -
                    18:00, Mon - Sat
                  </p>
                </div>
              </div>
              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Delivery Information</Link>
                      </li>

                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link>Contact Us</Link>
                      </li>
                      <li>
                        <Link>Support Center</Link>
                      </li>
                      <li>
                        <Link>Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Delivery Information</Link>
                      </li>

                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link>Contact Us</Link>
                      </li>
                      <li>
                        <Link>Support Center</Link>
                      </li>
                      <li>
                        <Link>Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Delivery Information</Link>
                      </li>

                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link>Contact Us</Link>
                      </li>
                      <li>
                        <Link>Support Center</Link>
                      </li>
                      <li>
                        <Link>Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Delivery Information</Link>
                      </li>

                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link>Contact Us</Link>
                      </li>
                      <li>
                        <Link>Support Center</Link>
                      </li>
                      <li>
                        <Link>Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <p>From App Store or Google Play</p>
                <br />
                <div className="d-flex  " width={150}>
                  <Link>
                    {" "}
                    <img src={AppleLogo} alt="" width={150} />
                  </Link>
                  <Link>
                    {" "}
                    <img src={AppleLogo} alt="" className="mx-2" width={150} />
                  </Link>
                </div>
                <br /> <br />
                <br />
                <p>From App Store or Google Play</p>
                <Link>
                  {" "}
                  <img src={PaymentImg} alt="" className="Payment_img" />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row lastStrip">
            <div className="col-md-3">
              <p className="lastStrip_P-text">
                © 2022, <strong>Nest</strong> - HTML Ecommerce Template{" "}
              </p>
            </div>

            <div className="col-md-6 d-flex">
              <div className="m-auto d-flex align-items-center ml-auto ">
                <div className="Phon d-flex align-items-center mx-5 ">
                  <span>
                    <HeadphonesOutlinedIcon />
                  </span>
                  <div className="info ml-3">
                    <h3 className="text-g mb-0">1900-888</h3>
                    <p className="mb-0"> 24/7 Support Center</p>
                  </div>
                </div>

                <div className="Phon d-flex align-items-center  mx-5">
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

            <div className="col-md-3 part3">
              <div className="d-flex align-items-center flow_text">
                <h5>Follow Us</h5>
                <ul className="list list-inline">
                  <li className="list-inline-item">
                    <Link>
                      {" "}
                      <FacebookOutlinedIcon />
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link>
                      <InstagramIcon />
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link>
                      {" "}
                      <YouTubeIcon />
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link>
                      {" "}
                      <LinkedInIcon />
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link>
                      {" "}
                      <TwitterIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="lasTriptext">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
