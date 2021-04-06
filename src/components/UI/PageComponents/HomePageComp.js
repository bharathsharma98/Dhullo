import React, { useEffect } from "react";
import TextComp from "../content/TextComponents/TextComponent";
import MainImage from "../content/ImageComponents/ImgComp";
import "./HomePageComp.css";
import HowItWorks3 from "../content/HowItWorksComponent/HowItWorksComp";
import {CircularTextComp} from "../content/CircularRingComponent/CircRingComp";
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
            squareImage={true}
            minHeight="40vh"
          />
          <TextComp
            header="Car Care"
            paragraph="Dhullo car care is a destination for car wash and detailing service
located in Bangalore. We strive to provide the highest level of quality and
consistency so that your car comes out appearing as new every single time.
Our dedication to excellence sets the standard of convenience and
consistency for our car care service."
          />
        </div>
        <div className="circcontainer">
          <CircularTextComp
            imgUrl={umbrella}
            heading={"Reliability"}
            paragraph="For any service to be deemed reliable, it is important to value
          each and every customer. We not only aspire to gain our customers trust,
but also provide a seamless experience throughout. For it is through
reliability we endeavor to move forward"
            styles={redstyles}
          />
          <CircularTextComp
            imgUrl={water}
            heading={"Save Water"}
            styles={bluestyles}
            paragraph="Water is one of the most important resource on Earth. And
that is why environmentally responsible services are something we are
proud to promote. Saving water is a necessary measure for any car service.
Our staff members abide by all the required environmental guidelines and
also make sure that the quality of service is not affected."
          />
        </div>
        <div className="custsatcontainer">
          <TextComp header="Customer Satisfaction" />
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
