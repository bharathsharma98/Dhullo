import React from "react";
import "./CircRingComp.css";

let CircularTextComp = (props) => {
  return (
    <div className="circularcompwithtext" style={props.styles}>
      <div className="homeimagecontainer" >
        <img src={props.imgUrl}   alt={props.imgUrl} ></img>
      </div>
      <div className="header">
        <h1 style={props.styles}>{props.heading}</h1>
      </div>
      <div className="paragraph">
        <p style={props.styles}>{props.paragraph}</p>
      </div>
    </div>
  );
};
export default CircularTextComp;
