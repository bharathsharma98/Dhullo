import React from "react";
import SmallTextComp from "./smalltext";
import "./howitworks.css";
import SmallImageContainer from "./smallimagecontainer";
const HowItWorks = () => {
  return (
    <div
      className="parent"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        marginLeft: "7rem",
      }}
    >
      <div
        className="mixcontainer1"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        <SmallImageContainer />
        <SmallTextComp />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
        <p style={{ fontSize: "2rem " }}>.</p>
        <p style={{ fontSize: "2rem" }}>.</p>
        <p style={{ fontSize: "2rem" }}>.</p>
        <p style={{ fontSize: "2rem" }}>.</p>
        <p style={{ fontSize: "2rem" }}>.</p>
      </div>
      <div
        className="mixcontainer1"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        <SmallTextComp />
        <SmallImageContainer />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        <p style={{ fontSize: "4rem" }}>.</p>
        <p style={{ fontSize: "4rem" }}>.</p>
        <p style={{ fontSize: "4rem" }}>.</p>
      </div>
      <div
        className="mixcontainer1"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        <SmallImageContainer />
        <SmallTextComp />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        <p style={{ fontSize: "4rem" }}>.</p>
        <p style={{ fontSize: "4rem" }}>.</p>
        <p style={{ fontSize: "4rem" }}>.</p>
      </div>
      <div
        className="mixcontainer1"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        <SmallImageContainer />
        <SmallTextComp />
      </div>
    </div>
    
  );
};
export default HowItWorks;
