import React from "react";
import "./HowItWorksComp.css";
import relax from "../../../../Image/relax.png";
import agent from "../../../../Image/agent.png";
import bookservice from "../../../../Image/bookservice.png";
import selectservice from "../../../../Image/selectservice.png";

const HowItWorks = () => {
  return (
    <div>
      <h1>HOW IT WORKS</h1>
      <div className="howitworks-container">
        <div className="howItWorks1">
          <div className="top left">
            <img src={selectservice}></img>
          </div>

          <div className="middle">
            <p>1</p>
          </div>

          <div className="bottom right">
            <p>SELECT A SERVICE</p>
          </div>
        </div>
  
        <div className="howItWorks2">
          <div className="top left">
            <img src={bookservice}></img>
          </div>
          <div className="middle">
            <p>2</p>
          </div>
          <div className="bottom right">
            {" "}
            <p>BOOK A SERVICE</p>
          </div>
        </div>
 
        <div className="howItWorks3">
          {" "}
          <div className="top left">
            <img src={agent}></img>
          </div>
          <div className="middle">
            <p>3</p>
          </div>
          <div className="bottom right">
            {" "}
            <p>WAIT FOR AGENT</p>
          </div>
        </div>
 
        <div className="howItWorks4">
          {" "}
          <div className="top left">
            {" "}
            <img src={relax}></img>
          </div>
          <div className="middle">
            <p>4</p>
          </div>
          <div className="bottom right">
            {" "}
            <p>RELAX</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
