import React, { useState } from "react";
import "./CatSlider.css";
import Slider from "react-slick";
import Vegetables from "../../Assets/images/cat-1.png";
// import Snack from "../../Assets/images/cat-3.png";
// import Black_plum from "../../Assets/images/cat-4.png";
// import Custard_apple from "../../Assets/images/cat-5.png";
// import Red_apple from "../../Assets/images/cat-9.png";
// import Cake_Milk from "../../Assets/images/cat-13.png";
// import Peach from "../../Assets/images/cat-11.png";
// import HeadPhone from "../../Assets/images/cat-15.png";
// import Coffe_Tea from "../../Assets/images/cat-14.png";
// import Oranic_Kiwi from "../../Assets/images/cat-12.png";
// import Strawberry from "../../Assets/images/cat-2.png";

const CatSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
  ]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <div>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <div className="listItem">
            <ul className=" list list-inline ml-auto filterTab">
              <li className="list-inline-item">
                <a className="cursor">ALL</a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Milks & Dairies </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Coffes & Teas </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Pet Foods </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Meats </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Vegetables </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor">Fruits </a>
              </li>
            </ul>
          </div>
          <Slider {...settings} className="cat_slider_main">
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img src={Vegetables} alt="" />
                      <h4>Vegetables</h4>
                      <span>35 items</span>
                    </div>
                  </div>
                );
              })}
            {/* <div className='item'>
                            <div className='info'>
                                <img src={Vegetables} alt='' />
                                <h4>Vegetables</h4>
                                <span>35 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Snack} alt='' />
                                <h4>Snack</h4>
                                <span>35 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Black_plum} alt='' />
                                <h4>Black plum</h4>
                                <span>35 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Custard_apple} alt='' />
                                <h4>Custard apple</h4>
                                <span>35 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Red_apple} alt='' />
                                <h4>Red Apple</h4>
                                <span>76 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Cake_Milk} alt='' />
                                <h4>Cake Milk</h4>
                                <span>35 items </span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Peach} alt='' />
                                <h4>Peach</h4>
                                <span>35 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={HeadPhone} alt='' />
                                <h4>HeadPhone</h4>
                                <span>35 items</span>
                            </div>
                        </div>


                        <div className='item'>
                            <div className='info'>
                                <img src={Coffe_Tea} alt='' />
                                <h4>Coffe & Tea</h4>
                                <span>35 items</span>
                            </div>
                        </div>


                        <div className='item'>
                            <div className='info'>
                                <img src={Oranic_Kiwi} alt='' />
                                <h4>Oranic Kiwi</h4>
                                <span>35 items</span>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src={Strawberry} alt='' />
                                <h4>Strawberry</h4>
                                <span>35 items</span>
                            </div>
                        </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CatSlider;
