import React from "react";
import "./SmallTextComp.css";
let SmallTextComp = () => {
  let textstyles = {
    height: "3rem",
    width: "15rem",
    borderRadius: "10px",
  };
  return (
    <div className="smalltextcontainer" style={textstyles}>
      <h3>{`Car Care`}</h3>
    </div>
  );
};
export default SmallTextComp;
