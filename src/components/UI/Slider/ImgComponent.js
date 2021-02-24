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
      
      <h3 className="slidertext" >{props.imgComponent.description}</h3>
      {/* <p style={{fontSize:'1rem',marginTop:'15rem'}}>{props.imgComponent.details}</p> */}
    </div>
  );
}

export default ImgComponent;
