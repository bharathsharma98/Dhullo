import React, { Component } from "react";
import detailingimg from "../../../Image/detailing.png";
import TextComp from "../../UI/content/TextComponents/TextComponent";
import MainImage from "../../UI/content/ImageComponents/ImgComp";
import './about.css';
class about extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>WE MAKE YOUR CAR FEEL GOOD</h1>
        <div className="mixcontainer1">
          <TextComp />
          <MainImage type={detailingimg} />
        </div>
        <h1 style={{ textAlign: "center" }}>our story</h1>
        <div className="mixcontainer2">
          <TextComp />
          <MainImage type={detailingimg} />
        </div>
        <h1 style={{ textAlign: "center" }}>our values</h1>
        <div className="textcontainer1">
          <TextComp />
          <TextComp />
          <TextComp />
        </div>
      </div>
    );
  }
}

export default about;
