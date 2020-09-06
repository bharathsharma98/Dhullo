import React from "react";
import carimage from "../../../Image/carinhand.png";
import "./smallimagecontainer.css";

const SmallImageContainer = () => {
  return (
    <div>
      <img className="smallimageclass" alt="sellimg" src={carimage} />
    </div>
  );
};
export default SmallImageContainer;
