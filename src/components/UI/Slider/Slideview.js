import React, { Component } from "react";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImgComponent from "./ImgComponent";
import ImageData from "./ImageData";

export default class Slideview extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };

    const imgData = ImageData.map((item) => {
      return <ImgComponent key={item.id} imgComponent={item} />;
    });
    return (
      <div>
        <Slider {...settings}>{imgData}</Slider>
      </div>
    );
  }
}
