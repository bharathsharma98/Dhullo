import React from "react";
import "./TextComponent.css";
export const TextComp = (props) => {
  return (
    <div className="textcontainer">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};
export const ServiceTextComp = (props) => {
  return (
    <div className="Servicetextcontainer">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};
 
