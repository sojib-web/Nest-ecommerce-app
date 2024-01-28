import React, { useRef, useState } from "react";
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

const ProDetails = () => {
  const [zoomImage, setZoomImage] = useState(
    "https://nest-frontend.netlify.app/assets/imgs/shop/product-16-4.jpg"
  );

  const [bigImageSize, setBigImageSize] =useState([1500, 1500]);
  const [smallImageSize, setSmallSize] = useState ([150, 150]);
  const ZoomSlider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {};

  return (
    <section className="detailsPage">
      <div className="breadcrumbWrapper">
        <div className="container-fluid">
          <BreadCrum />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 part1">
            <div className="row">
              {/* productZoom  Start here  */}
              <div className="col-md-5">
                <div className="productZoom">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://nest-frontend.netlify.app/assets/imgs/shop/product-16-4.jpg?im=Resize=(${})`}/>
                </div>

                <Slider
                  {...settings}
                  className="productZoomSlide"
                  ref={ZoomSlider}
                >
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-3-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-5-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-10-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-9-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-6-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-8-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-7-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-2-2.jpg?im=Resize=(150,150)"
                      alt=""
                      className="w-100"
                      onClick={() => goto(0)}
                    />
                  </div>
                </Slider>
              </div>
              {/* productZoom  End here  */}
              {/* productInfo   Start here  */}
              <div className="col-md-7 product-info">
                <h1>Seeds of Change Organic Quinoa,Brown</h1>
                <div className="d-flex align-items-center mb-4">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                  <span className="TextPro">(32 reviews)</span>
                </div>
                <div className="proPrice d-flex align-items-center">
                  <span>$38</span>
                  <span className="proPrice2 flex-column">$38</span>
                </div>
                {/* <div className="offer flex-column ">
                  <span className="Offer">26% Off</span>{" "}
                </div> */}
                <div className="textPro2">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam rem officia, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Aliquam rem officia, corrupti reiciendis
                    minima nisi modi, quasi, odio minus dolore impedit fuga eum
                    eligendi.
                  </p>
                </div>
                <div className="SizeOption">
                  <span>Size / Weight: </span>
                </div>
              </div>
              {/* productInfo   end here  */}
            </div>
          </div>

          <div className="col-md-3 part2"></div>
        </div>
      </div>
    </section>
  );
};

export default ProDetails;
