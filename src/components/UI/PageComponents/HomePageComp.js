import React from "react";
import TextComp from "../content/TextComponents/TextComponent";
import MainImage from "../content/ImageComponents/ImgComp";
import "./HomePageComp.css";
import HowItWorks3 from "../content/HowItWorksComponent/HowItWorksComp";
import CircularTextComp from "../content/CircularRingComponent/CircRingComp";
import thumbsupimg from "../../../Image/thumbsup.png";
import carinhandimage from "../../../Image/carinhand.png";
const Homepage = () => {
  return (
    <div className="main">
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>WE SWEAR BY</h1>

      <div className="parent">
        <div className="swearbycontainer">
          <MainImage type={carinhandimage} />
          <TextComp />
        </div>
        <div className="circcontainer">
          <CircularTextComp />
          <CircularTextComp />
        </div>
        <div className="custsatcontainer">
          <TextComp />
          <MainImage type={thumbsupimg} />
        </div>
      </div>

      <div style={{ alignItems: "center" }}>
        <HowItWorks3 />
      </div>
    </div>
  );
};
export default Homepage;
