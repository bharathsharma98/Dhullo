import React from "react";
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
 import './mainImage.css';
class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: " ",
    };
  }

  render(props) {
    console.log(this.props.type);
    return (
      <div  className="mixcontainer1">
        <img src={this.props.type} alt=""></img>
      </div>
    );
  }
}
export default MainImage;
