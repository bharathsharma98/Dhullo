import React from "react";
import TextComp from "./TextComponent";
import MainImage from "./mainimage";
import "./homepage.css";
import HowItWorks2 from './howitworks2';
import HowItWorks3 from './howitworks3';
import CircularTextComp from "./CircularTextComponent";
import thumbsupimg from '../../../Image/thumbsup.png'
import carinhandimage from "../../../Image/carinhand.png";
import carfoamspray from "../../../Image/123.jpg";
import carsanitizationposter from "../../../Image/Car Sanitization Poster.png";
import carshine from "../../../Image/car shine.jpg";
import detailingimg from "../../../Image/detailing.png";
import inspectionimg from "../../../Image/inspection.png";
import interiorimg from "../../../Image/interior.jpg";
import sanitizationimg from "../../../Image/sanitization.png";
import washingimg from "../../../Image/washing.png";
import waterwasteimg from "../../../Image/water_waste.jpg";
const Homepage = () => {
  
  return (
    <div  className="main">
      <h1 style={{textAlign:'center',marginTop:'3rem'}}>WE SWEAR BY</h1> 
       
      <div className="parent">
        <div className="mixcontainer1">
          <MainImage type={carinhandimage}/>
          <TextComp/>
        </div>
        <div className="textcontainer1"  >
          <CircularTextComp />
          <CircularTextComp />
        </div>
        <div className="mixcontainer2">
          <TextComp/>
          <MainImage type={thumbsupimg}/>
        </div>
      </div>
 
    <div  style={{ alignItems:'center'}}>
      <HowItWorks3/>
    </div>

    </div>
  );
};
export default Homepage;
