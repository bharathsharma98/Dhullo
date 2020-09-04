import React from "react";
import TextComp from "./TextComponent";
import ImageContainer from "./imagecontainer";
import "./servicepage.css";
const Servicepage = () => {
  let containerStyle = {
    display: "flex",
    flexDirection: "row",
    // flexWrap: "wrap"
  };
  return (
    <div>
      <h1>We Swear By</h1>
      <div className="mixcontainer1" style={containerStyle}>
        <TextComp />
        <ImageContainer />
      </div>
      <br></br>
      <h1>Sanitization</h1>
      <div className="mixcontainer2" style={containerStyle}>
        <ImageContainer />
        <TextComp />
      </div>
      <h1>Detailing</h1>
      <div className="mixcontainer2" style={containerStyle}>
        <TextComp />
        <ImageContainer />
      </div>
      <h1>Interior Detailing</h1>
      <div className="mixcontainer2" style={containerStyle}>
        <ImageContainer />
        <TextComp />
      </div>
      <br>
      </br>
      <h1>Exterior Detailing</h1>
      <div className="mixcontainer2" style={containerStyle}>
        <ImageContainer />
        <TextComp />
      </div>
      <br></br>

    </div>
  );
};
export default Servicepage;