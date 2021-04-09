import React from "react";
// import { findByLabelText } from '@testing-library/react';
import { Link } from "react-router-dom";
import "./ImgComponents.css";
function ImgComponent(props) {
  return (
    <div className="imagecontainer">
      <Link to="/services">
        <img
          className="imagefield"
          src={props.imgComponent.imgSrc}
          alt="slide-img"
        ></img>
      </Link>

      <h3 style={{ color: props.imgComponent.color }} className="slidertext">
        {props.imgComponent.description}
      </h3>
      <p style={{ color: props.imgComponent.subColor }} className="sliderSubText">
        {props.imgComponent.details}
      </p>
    </div>
  );
}

export default ImgComponent;
