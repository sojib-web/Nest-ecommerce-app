import React, { useEffect, useRef, useState } from "react";
import "./ProDetails.css";
import BreadCrum from "../../BreadCrum/BreadCrum";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
// import ImgZoom from "../../../Assets/images/product-2.jpg";
import Slider from "react-slick";
// import ZoomImg from "../../../Assets/images/cat-12.png";
// import ZoomImg1 from "../../../Assets/images/cat-14.png";
// import ZoomImg2 from "../../../Assets/images/cat-15.png";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { Button } from "@mui/material";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Slidebar from "../../SlideBar/Slidebar";

import tabImg from "../../../Assets/images/author-2.png";
import Product from "../../Products/Product";
import { Link, useParams } from "react-router-dom";

const ProDetails = (props) => {
  const [zoomImage, setZoomImage] = useState(
    "https://nest-frontend.netlify.app/assets/imgs/shop/product-16-4.jpg"
  );

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smallImageSize, setSmallSize] = useState([150, 150]);
  const [activeSize, setActiveSize] = useState(0);
  const [inputValue, setInputvalue] = useState(1);

  const [activeTabs, setActivetabs] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});

  const [productCat, setProductcat] = useState({
    parentCat: sessionStorage.getItem("parentCat"),
    subCatName: sessionStorage.getItem("subCatName"),
  });

  const ZoomSlider = useRef();
  const ZoomSliderBig = useRef();
  let { id } = useParams();

  const RelatesProducts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 10000,
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (url, index) => {
    setZoomImage(url);
    ZoomSlider.current.slickGoTo(index);
    ZoomSliderBig.current.slickGoTo(index);
  };

  const isActive = (index) => {
    setActiveSize(index);
  };

  const plus = () => {
    setInputvalue(inputValue + 1);
  };

  const minus = () => {
    if (inputValue !== 1) {
      setInputvalue(inputValue - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    props.data.length !== 0 &&
      props.data.map((item) => {
        item.items.length !== 0 &&
          item.items.map((items_) => {
            items_.products.length !== 0 &&
              items_.products.map((product) => {
                // console.log(product);
                if (parseInt(product.id) === parseInt(id)) {
                  setCurrentProduct(product);
                  console.log(product);
                }
              });
          });
      });
  }, [id]);

  return (
    <section className="detailsPage detailContainer">
      {/* breadcrum section  */}
      <div className="breadcrumbWrapper">
        <div className="container-fluid">
          <ul className="breadcrumd breadcrumb2 md-0">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link
                to={`/cat/${
                  productCat.parentCat.split("").join("-").toLowerCase
                }`}
                className="text-capitalize"
              >
                {productCat.parentCat}
              </Link>
            </li>
            <li>
              <Link className="text-capitalize">{productCat.subCatName}</Link>
            </li>
            <li>{currentProduct.productName}</li>
          </ul>
        </div>
      </div>
      {/* breadcrum section  end */}

      {/* {console.log(currentProduct)} */}
      <div className="container detailContainer">
        <div className="row">
          {/* productZoom  Start here  */}
          <div className="col-md-5">
            <Slider
              {...settings2}
              className="productZoomSlide"
              ref={ZoomSliderBig}
            >
              {currentProduct.productImages !== undefined &&
                currentProduct.productImages.map((imgUrl, index) => {
                  return (
                    <div className="productZoom">
                      <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={`${imgUrl}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`}
                      />
                    </div>
                  );
                })}
            </Slider>
            <Slider {...settings} className="productZoomSlide" ref={ZoomSlider}>
              {currentProduct.productImages !== undefined &&
                currentProduct.productImages.map((imgUrl, index) => {
                  return (
                    <div className="item">
                      <img
                        src={`${imgUrl}?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                        alt=""
                        className="w-100"
                        onClick={() => goto(index)}
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          {/* productZoom  End here  */}

          {/* productInfo   Start here  */}
          <div className="col-md-7 product-info">
            <h1>{currentProduct.productName}</h1>
            <div className="d-flex align-items-center mb-4">
              <Rating
                name="half-rating"
                defaultValue={parseFloat(currentProduct.rating)}
                precision={0.5}
              />
              <span className="TextPro">(32 reviews)</span>
            </div>
            <div className="proPrice d-flex align-items-center">
              <span>TK {currentProduct.price}</span>
              <span className="proPrice2 flex-column">
                TK {currentProduct.oldPrice}
              </span>
            </div>
            <div className="offer flex-column ">
              <span className="Offer">{currentProduct.discount} Offer</span>{" "}
            </div>

            {/* <div className="weight flex-column ">
              <span className="weight">weight: {currentProduct.weight} </span>
            </div> */}

            <div className="textPro2">
              <p>{currentProduct.description}</p>
            </div>

            {currentProduct.weight !== undefined &&
              currentProduct.weight.length && (
                <div className="SizeOption d-flex align-items-center ">
                  <span>Size / Weight: </span>
                  <ul className="list list-inline mb-0 pl-4">
                    {currentProduct.weight.map((item, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {item}g
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

            {currentProduct.RAM !== undefined && currentProduct.RAM.length && (
              <div className="SizeOption d-flex align-items-center ">
                <span>RAM: </span>
                <ul className="list list-inline mb-0 pl-4">
                  {currentProduct.RAM.map((RAM, index) => {
                    return (
                      <li className="list-inline-item">
                        <a
                          className={`tag ${
                            activeSize === index ? "active" : ""
                          }`}
                          onClick={() => isActive(index)}
                        >
                          {RAM} GB
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {currentProduct.SIZE !== undefined &&
              currentProduct.SIZE.length && (
                <div className="SizeOption d-flex align-items-center ">
                  <span>SIZE: </span>
                  <ul className="list list-inline mb-0 pl-4">
                    {currentProduct.SIZE.map((SIZE, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {SIZE}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

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
              <div className="btnProduct">
                <Button className="addCart">
                  <ProductionQuantityLimitsOutlinedIcon />
                  Add to Cart
                </Button>
              </div>

              <div className="btn-borders ml-auto">
                <Button className="btn-border">
                  <FavoriteBorderOutlinedIcon />
                </Button>
                <Button className="btn-border">
                  <CompareArrowsOutlinedIcon />
                </Button>
              </div>
            </div>
          </div>
          {/* productInfo   end here  */}
          <div className="container detailPagetabs pt-3 pb-3">
            <div className="customTabs pt-4">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => setActivetabs(0)}
                  >
                    Description
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => setActivetabs(1)}
                  >
                    Additional info
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => setActivetabs(2)}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>
              <br />

              {activeTabs === 0 && (
                <div className="TabContents">
                  {/* <div className="TabcontentItem"> */}
                  <p>
                    Uninhibited carnally hired played in whimpered dear gorilla
                    koala depending and much yikes off far quetzal goodness and
                    from for grimaced goodness unaccountably and meadowlark near
                    unblushingly crucial scallop tightly neurotic hungrily some
                    and dear furiously this apart. Spluttered narrowly yikes
                    left moth in yikes bowed this that grizzly much hello on
                    spoon-fed that alas rethought much decently richly and wow
                    against the frequent fluidly at formidable acceptably
                    flapped besides and much circa far over the bucolically hey
                    precarious goldfinch mastodon goodness gnashed a jellyfish
                    and one however because.
                  </p>
                  {/* </div> */}

                  <br />
                  <h2>Packaging & Delivery</h2>
                  <br />
                  <p>
                    Uninhibited carnally hired played in whimpered dear gorilla
                    koala depending and much yikes off far quetzal goodness and
                    from for grimaced goodness unaccountably and meadowlark near
                    unblushingly crucial scallop tightly neurotic hungrily some
                    and dear furiously this apart. Spluttered narrowly yikes
                    left moth in yikes bowed this that grizzly much hello on
                    spoon-fed that alas rethought much decently richly and wow
                    against the frequent fluidly at formidable acceptably
                    flapped besides and much circa far over the bucolically hey
                    precarious goldfinch mastodon goodness gnashed a jellyfish
                    and one however because.
                  </p>

                  <br />
                  <h2>Suggested Use</h2>
                  <p>
                    Refrigeration not necessary. <br /> Stir before serving
                  </p>
                  <br />
                  <h2>Warnings</h2>
                  <p>
                    Oil separation occurs naturally. May contain pieces of
                    shell.
                  </p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="TabContenets">
                  <div className="table-responsive">
                    <tr class="stand-up">
                      <th>Stand Up</th>
                      <td>
                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                    </tr>
                    <tr class="folded-wo-wheels">
                      <th>Folded (w/o wheels)</th>
                      <td>
                        <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                    </tr>
                    <tr class="folded-w-wheels">
                      <th>Folded (w/ wheels)</th>
                      <td>
                        <p>32.5″L x 24″W x 18.5″H</p>
                      </td>
                    </tr>
                    <tr class="door-pass-through">
                      <th>Door Pass Through</th>
                      <td>
                        <p>24</p>
                      </td>
                    </tr>
                    <tr class="frame">
                      <th>Frame</th>
                      <td>
                        <p>Aluminum</p>
                      </td>
                    </tr>
                    <tr class="weight-wo-wheels">
                      <th>Weight (w/o wheels)</th>
                      <td>
                        <p>20 LBS</p>
                      </td>
                    </tr>
                    <tr class="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                        <p>60 LBS</p>
                      </td>
                    </tr>
                    <tr class="width">
                      <th>Width</th>
                      <td>
                        <p>24″</p>
                      </td>
                    </tr>
                    <tr class="handle-height-ground-to-handle">
                      <th>Handle height (ground to handle)</th>
                      <td>
                        <p>37-45″</p>
                      </td>
                    </tr>
                    <tr class="wheels">
                      <th>Wheels</th>
                      <td>
                        <p>12″ air / wide track slick tread</p>
                      </td>
                    </tr>
                    <tr class="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                        <p>21.5″</p>
                      </td>
                    </tr>
                    <tr class="head-room-inside-canopy">
                      <th>Head room (inside canopy)</th>
                      <td>
                        <p>25″</p>
                      </td>
                    </tr>
                    <tr class="pa_color">
                      <th>Color</th>
                      <td>
                        <p>Black, Blue, Red, White</p>
                      </td>
                    </tr>
                    <tr class="pa_size">
                      <th>Size</th>
                      <td>
                        <p>M, S</p>
                      </td>
                    </tr>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="TabContenets">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />
                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src={tabImg} alt="" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Selina
                          </span>
                        </div>

                        <div className="info">
                          <div className="d-flex align-items-center">
                            <h6>january 2024 at 3:12 pm </h6>
                            <div className="Rating">
                              <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt?
                          </p>
                        </div>
                      </div>

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src={tabImg} alt="" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Selina
                          </span>
                        </div>

                        <div className="info">
                          <div className="d-flex align-items-center">
                            <h6>january 2024 at 3:12 pm </h6>
                            <div className="Rating">
                              <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt?
                          </p>
                        </div>
                      </div>

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src={tabImg} alt="" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Selina
                          </span>
                        </div>

                        <div className="info">
                          <div className="d-flex align-items-center">
                            <h6>january 2024 at 3:12 pm </h6>
                            <div className="Rating">
                              <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt?
                          </p>
                        </div>
                      </div>
                      <br />
                      <br />
                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                        <div className="form-group">
                          <textarea
                            className="form-control from1"
                            placeholder="Write a reviews"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Customer Name:"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email  "
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Website "
                          />
                        </div>
                        <br /> <br />
                        <div className="form-group">
                          <Button className=" btn-border">Submit Review</Button>
                        </div>
                      </form>
                    </div>

                    {/* col - md 3 start  */}
                    <div className="col-md-4 CustomerTab">
                      <div className="reviewsText">
                        <h4>Customer reviews </h4>
                        <div className=" reviewRating d-flex align-item-center mt-2">
                          <Rating
                            name="half-rating"
                            defaultValue={2.5}
                            precision={0.5}
                          />
                          <strong className="">4.8 out of 5</strong>
                        </div>

                        <br />
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">5 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "56%", height: "20px" }}
                          >
                            75
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">3 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "60%", height: "20px" }}
                          >
                            60
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">4 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "30%", height: "20px" }}
                          >
                            27
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">5 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="RelatedProduct">
        <div className="RelatedProText">
          <h3>Product Detail</h3>
        </div>
        <hr />
        <Slider {...RelatesProducts} className="productSlider">
          <div className="item">
            <Product tag="new" />
          </div>

          <div className="item">
            <Product tag="new" />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>

          <div className="item">
            <Product tag="new" />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ProDetails;
