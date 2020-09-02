import React from "react";
import TextComp from "./TextComponent";
import ImageContainer from "./imagecontainer";
import "./homepage.css";
import CircularTextComp from "./CircularTextComponent"
const Homepage = () => {
  let containerStyle = {
    display: "flex",
    flexDirection: "row",
    // flexWrap: "wrap"
  };
  return (
    <div>
         
      <h1>We Swear By</h1>
      <div className="mixcontainer1" style={containerStyle}>
        <ImageContainer />
        <TextComp h3="h" />
      </div>
      <div className="textcontainer1" style={containerStyle}>
        <CircularTextComp/>
        <CircularTextComp/>
      </div>
      <div className="mixcontainer2" style={containerStyle}>
        <TextComp />
        <ImageContainer />
      </div>

      <h1>HOW IT WORKS</h1>
    </div>
  );
};
export default Homepage;
