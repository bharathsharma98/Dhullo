import React, { useEffect } from "react";
import TextComp from "../content/TextComponents/TextComponent";
import MainImage from "../content/ImageComponents/ImgComp";
import "./HomePageComp.css";
import HowItWorks3 from "../content/HowItWorksComponent/HowItWorksComp";
import CircularTextComp from "../content/CircularRingComponent/CircRingComp";
import thumbsupimg from "../../../Image/customer_satisfaction.png";
import carinhandimage from "../../../Image/carinhand.png";
import umbrella from "../../../Image/Group 103.svg";
import water from "../../../Image/Group 102@2x.png";

const Homepage = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    props.click();
  }, []);
  const redstyles = {
    backgroundColor: "#F37A7D",
    color: "white",
  };
  const bluestyles = {
    backgroundColor: "#94D9EF",
    color: "black",
  };
  return (
    <div className="main">
      <h1>WE SWEAR BY</h1>

      <div className="parent">
        <div className="swearbycontainer">
          <MainImage
            type={carinhandimage}
            height="35vh"
            width="35vw"
            minHeight="40vh"
          />
          <TextComp />
        </div>
        <div className="circcontainer">
          <CircularTextComp
            imgUrl={umbrella}
            heading={"Reliability"}
            paragraph={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that t has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
            }
            styles={redstyles}
          />
          <CircularTextComp
            imgUrl={water}
            heading={"Save Water"}
            paragraph={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that t has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
            }
            styles={bluestyles}
          />
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
