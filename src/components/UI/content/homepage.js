import React from "react";
import TextComp from "./TextComponent";
import ImageContainer from "./imagecontainer";
import "./homepage.css";
import HowItWorks from './howitworks';
import CircularTextComp from "./CircularTextComponent";
const Homepage = () => {
  
  return (
    <div  className="main">
      <h1 style={{textAlign:'center'}}>WE SWEAR BY</h1> 
      <div className="parent">
        <div className="mixcontainer1">
          <ImageContainer />
          <TextComp/>
        </div>
        <div className="textcontainer1"  >
          <CircularTextComp />
          <CircularTextComp />
        </div>
        <div className="mixcontainer2">
          <TextComp/>
          <ImageContainer />
        </div>
      </div>
      <h1 style={{textAlign:'center'}}>HOW IT WORKS</h1>
    <div>
      <HowItWorks/>
    </div>

    </div>
  );
};
export default Homepage;
