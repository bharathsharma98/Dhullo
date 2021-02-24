import React, { Component } from "react";
import TextComp from "../../UI/content/TextComponents/TextComponent";
import MainImage from "../../UI/content/ImageComponents/ImgComp";
import MissionImage from "../../../Image/mission image.png";
import OurStoryImg from "../../../Image/our story image.png";
 
import CircularTextComp from "../../../components/UI/content/CircularRingComponent/CircRingComp";
import "./about.css";
class about extends Component {
  
  render() {
    

    const pinkStyle = {
      backgroundColor: "#e3bfdd",
    };
    const blueStyle = {
      backgroundColor: "#93cedb",
    };
    const yellowStyle = {
      backgroundColor: "#dde3b6",
    };
    return (
      <div className="aboutcontainer">
        <h1
          className="aboutheader"
          style={{
            color: "#03588C",
            textAlign: "center",
            marginBottom: "4rem",
            marginTop: "2rem",
          }}
        >
          We make car feel good
        </h1>
        <div className="mixcontainer1" style={{ marginBottom: "1rem" }}>
          <TextComp />
          <MainImage type={MissionImage} />
        </div>
        <h1
          className="ourstoryhead"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            marginTop: "2rem",
          }}
        >
          Our Story
        </h1>
        <div className="ourstorycomp" style={{ marginBottom: "1rem" }}>
          <div className="ourstoryparacomp">
            <p>
              The French lettering company Letraset manufactured a set of
              dry-transfer sheets which included the lorem ipsum filler text in
              a variety of fonts, sizes, and layouts. These sheets of lettering
              could be rubbed on anywhere and were quickly adopted by graphic
              artists, printers, architects, and advertisers for their
              professional look and ease of use.
            </p>

            <p>
              The French lettering company Letraset manufactured a set of
              dry-transfer sheets which included the lorem ipsum filler text in
              a variety of fonts, sizes, and layouts. These sheets of lettering
              could be rubbed on anywhere and were quickly adopted by graphic
              artists, printers, architects, and advertisers for their
              professional look and ease of use.
            </p>
          </div>
          <div className="ourstoryimgcomp">
            <MainImage type={OurStoryImg} />
          </div>
        </div>
        <h1
          className="aboutheader"
          style={{
           
            textAlign: "center",
            marginBottom: "4rem",
            marginTop: "2rem",
          }}
        >
          Our Values
        </h1>
        <div className="textcontainer1" style={{ marginBottom: "4rem" }}>
          <CircularTextComp
            styles={pinkStyle}
            heading={"Reliability"}
            paragraph={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <CircularTextComp
            styles={blueStyle}
            heading={"Reliability"}
            paragraph={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            }
          />
          <CircularTextComp
            styles={yellowStyle}
            heading={"Reliability"}
            paragraph={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            }
          />
        </div>
      </div>
    );
  }
}

export default about;
