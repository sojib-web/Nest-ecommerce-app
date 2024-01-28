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

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smallImageSize, setSmallSize] = useState([150, 150]);


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

  const goto = (url) => { setZoomImage(url) };

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
                    src={`${zoomImage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`} />
                </div>

                <Slider
                  {...settings}
                  className="productZoomSlide"
                  ref={ZoomSlider}
                >
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-1-202302131739.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}

                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-1-202302131739.jpg')}
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}

                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg')}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}

                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg')}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/491278308/priya-fortified-with-vitamin-a-d-refined-sunflower-oil-1-l-product-images-o491278308-p491278308-0-202203170524.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/491278308/priya-fortified-with-vitamin-a-d-refined-sunflower-oil-1-l-product-images-o491278308-p491278308-0-202203170524.jpg')}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/491278308/priya-fortified-with-vitamin-a-d-refined-sunflower-oil-1-l-product-images-o491278308-p491278308-1-202203170524.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/491278308/priya-fortified-with-vitamin-a-d-refined-sunflower-oil-1-l-product-images-o491278308-p491278308-1-202203170524.jpg')}
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-1-202203170403.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-1-202203170403.jpg')}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-0-202203170403.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-0-202203170403.jpg')}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg')}
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
