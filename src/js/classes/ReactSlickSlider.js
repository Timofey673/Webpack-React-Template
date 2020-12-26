import React from "react";
import Slider from "react-slick";
import { baseURL } from "../variables";

class ReactSlickSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      lazyLoad: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div className="slick-container">
        <Slider {...settings}>
          <div>
            <img className="img-fluid" src={baseURL + "/bg-home-1.jpg"} />
          </div>
          <div>
            <img className="img-fluid" src={baseURL + "/bg-home-2.jpg"} />
          </div>
          <div>
            <img className="img-fluid" src={baseURL + "/bg-home-3.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickSlider;
