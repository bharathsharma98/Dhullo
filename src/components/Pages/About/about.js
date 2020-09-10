import React, { Component } from 'react';
import  ImageContainer from '../../UI/content/imagecontainer'
 
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
import TextComp from '../../UI/content/TextComponent'
import MainImage from "../../UI/content/mainimage";
class about extends Component {
  render() {
    let containerStyle={
      display:'flex',
      flexDirection:'row'
  }
    return (
      <div>
      <h1 style={{textAlign:'center'}}>WE MAKE YOUR CAR FEEL GOOD</h1>
        <div  className="mixcontainer1">
          <TextComp/>
          <MainImage type={detailingimg}/>
        </div>
        <h1 style={{textAlign:'center'}}>our story</h1>
        <div className="mixcontainer2">
        <TextComp/>
        <MainImage type={detailingimg}/>
        </div>
        <h1 style={{textAlign:'center'}}>our values</h1>
        <div  className="textcontainer1">
        <TextComp/>
        <TextComp/>
        <TextComp/>
        </div>
      </div>
    );
  }
}

export default about;