import React from "react";
import "./TextComponent.css";
let TextComp = (props) => {
  return (
    <div className="textcontainer">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};
export default TextComp;
