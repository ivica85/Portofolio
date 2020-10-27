import React from "react";
import Slider from "react-slick";

import slide1 from "../../resources/images/slide1.jpg";
import slide2 from "../../resources/images/slide2.jpg";
import slide3 from "../../resources/images/slide3.jpg";
import slide4 from "../../resources/images/slide4.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px`, overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide1})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide4})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
