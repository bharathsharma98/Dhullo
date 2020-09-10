import React from "react";
import TextComp from "./TextComponent";
import BoxComponent from "./BoxComponent";
import ImageContainer from "./imagecontainer";
import "./servicepage.css";
import Showimage from '../content/showimage'
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
import MainImage from "./mainimage";
class  Servicepage extends React.Component {
  constructor(){
    super();
    this.state={
      isOpen:true
    }
    
  }
  toggleBook =({isOpen})=>{
    this.setState({isOpen:!isOpen})
    console.log(isOpen)
  }
  render(){
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      // flexWrap: "wrap"
    };
    return (
      <div>
        <h1>We Swear By</h1>
        <div className="mixcontainer1" style={containerStyle}>
          <TextComp />
          <MainImage type={detailingimg}/>
        </div>
        <br />
        <div
          classname="boxcontainer"
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </div>
        <h1>Sanitization</h1>
        <div className="mixcontainer2" style={containerStyle}>
        <MainImage type={detailingimg}/>
          <TextComp />
        </div>
        <h1>Detailing</h1>
        <div className="mixcontainer2" style={containerStyle}>
          <TextComp />
          <MainImage type={detailingimg}/>
        </div>
        <h1>Interior Detailing</h1>
        <div className="mixcontainer2" style={containerStyle}>
        <MainImage type={detailingimg}/>
          <TextComp />
        </div>
        <br />
        <h1>Exterior Detailing</h1>
        <div className="mixcontainer2" style={containerStyle}>
        <MainImage type={detailingimg}/>
          <TextComp />
        </div>
        <br />
      </div>
    );
  }
 
};
export default Servicepage;
