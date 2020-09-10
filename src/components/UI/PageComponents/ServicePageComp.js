import React from "react";
import TextComp from "../content/TextComponents/TextComponent";
import BoxComponent from "../content/BoxComponent/BoxComp";
import "./ServicePageComp.css";
import ServiceDetailingImg from "../../../Image/servicedetailing.png";
import ServiceSanitizationImg from "../../../Image/servicesanitization.png";
import CarWashingImg from "../../../Image/servicewashing.png";
import MainImage from "../content/ImageComponents/ImgComp";
class Servicepage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
    };
  }
  toggleBook = ({ isOpen }) => {
    this.setState({ isOpen: !isOpen });
    console.log(isOpen);
  };
  render() {
    // const containerStyle = {
    //   display: "flex",
    //   flexDirection: "row",
    //   // flexWrap: "wrap"
    // };
    return (
      <div>
        <h1>WASHING</h1>
        <div className="washingcontainer">
          <TextComp />
          <MainImage type={CarWashingImg} />
        </div>
        <br />
        <div
          classname="serviceboxcontainer"
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
        <div className="sanitizationcontainer">
          <MainImage type={ServiceSanitizationImg} />
          <TextComp />
        </div>
        <h1>Detailing</h1>
        <div className="detailingcontainer">
          <TextComp />
          <MainImage type={ServiceDetailingImg} />
        </div>
        <h1>Interior Detailing</h1>
        <div className="intdetailingcontainer">
          <MainImage type={ServiceDetailingImg} />
          <TextComp />
          <div
            classname="serviceboxcontainer"
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <BoxComponent />
            <BoxComponent />
          </div>
        </div>
        <br />
        <h1>Exterior Detailing</h1>
        <div className="extdetailingcontainer">
          <MainImage type={ServiceDetailingImg} />
          <TextComp />
          <div
            classname="serviceboxcontainer"
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <BoxComponent />
            <BoxComponent />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Servicepage;
