import React, { useEffect } from "react";
import TextComp from "../../UI/content/TextComponents/TextComponent";
import MainImage from "../../UI/content/ImageComponents/ImgComp";
import MissionImage from "../../../Image/mission image@2x.png";
import OurStoryImg from "../../../Image/our story image@2x.png";

import {CircularTextCompGradient} from "../../../components/UI/content/CircularRingComponent/CircRingComp";
import "./about.css";
const About = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    props.click();
  }, []);
  const setScroll = () => {
    console.log(window.screenX);
  };
  React.useEffect(() => {
    window.addEventListener('scrollY', setScroll);
  });
  const pinkStyle = {
    background: "  linear-gradient(to bottom, #95E0F1 0%, #FFFFFF 100%)",
    borderColor: "  #97E1F1",
    textAlign:'center'
  };
  const blueStyle = {
    background: "linear-gradient(to bottom, #FFDEFE 0%, #FFFFFF 100%)",
    borderColor: "  #FFDFFE",
    textAlign: "center",
  };
  const yellowStyle = {
    background:
      "transparent linear-gradient(to bottom, #F8FAB3 0%, #FFFFFF 100%)",
    borderColor: "  #F8FAB4",
    textAlign: "center",
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
        <TextComp
          header="Our Mission"
          paragraph="Our primary aim is to provide hassle free, door to door car care services.We want to ensure our customers feel valued and provide a seamless experience
when it comes to taking care of their vehicles."
        />
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
            dry-transfer sheets which included the lorem ipsum filler text in a
            variety of fonts, sizes, and layouts. These sheets of lettering
            could be rubbed on anywhere and were quickly adopted by graphic
            artists, printers, architects, and advertisers for their
            professional look and ease of use.
          </p>

          <p>
            The French lettering company Letraset manufactured a set of
            dry-transfer sheets which included the lorem ipsum filler text in a
            variety of fonts, sizes, and layouts. These sheets of lettering
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
        <CircularTextCompGradient
          styles={pinkStyle}
          heading={"Transperency"}
          paragraph="The trust that we build with our customers is invaluable.
Transparency is the key to building that trust."
        />
        <CircularTextCompGradient
          styles={blueStyle}
          heading={"Commitment"}
          paragraph={
            "We are fully committed to fulfill our customers’ needs and requirements. "
          }
        />
        <CircularTextCompGradient
          styles={yellowStyle}
          heading={"Improvement"}
          paragraph={
            "We intend to constantly improve on our levels of service. Improvement paves the way for innovation. "
          }
        />
      </div>
    </div>
  );
};

export default About;
