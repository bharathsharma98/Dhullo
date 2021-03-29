import React from "react";
import "./HowItWorksComp.css";
import relax from "../../../../Image/relax.png";
import agent from "../../../../Image/agent1.png";
import bookservice from "../../../../Image/bookservice.png";
import selectservice from "../../../../Image/selectservice.png";
 
const HowItWorks = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "5%" }}>HOW IT WORKS</h1>
      <div className="howitworks-container">
        <div className="howItWorks1">
          <div className="top left">
            <img src={selectservice} alt={selectservice}></img>
          </div>

          <div className="middle">
            <li></li>
          </div>

          <div className="bottom right">
            <p>SELECT A SERVICE</p>
            <label>
              Select a service out of provided services such as
              -WASHING,SANITIATION.
            </label>
          </div>
        </div>

        <div className="howItWorks2">
          <div className="top left">
            <p>BOOK A SERVICE</p>
            <label>
              Select a service out of provided services such as
              -WASHING,SANITIATION.
            </label>
          </div>
          <div className="middle">
            <div>
              <li></li>
            </div>

            <div className="dots">
              <hr></hr>
            </div>
          </div>
          <div className="bottom right">
            <img src={bookservice} alt={bookservice}></img>
          </div>
        </div>

        <div className="howItWorks3">
 
          <div className="top left">
            <img src={agent} alt={relax}></img>
          </div>
          <div className="middle">
            <div className="dots">
              <hr></hr>
            </div>
            <li></li>
          </div>
          <div className="bottom right">
            {" "}
            <p>WAIT FOR AGENT</p>
            <label>
              Select a service out of provided services such as
              -WASHING,SANITIATION.
            </label>
          </div>
        </div>

        <div className="howItWorks4">
          {" "}
          <div className="top left">
            <p>RELAX</p>
            <label>
              Select a service out of provided services such as
              -WASHING,SANITIATION.
            </label>
          </div>
          <div className="middle">
            {" "}
            <li></li>
            <div className="dots">
              <hr></hr>
            </div>
          </div>
          <div className="bottom right">
            {" "}
            <img src={relax} alt={relax}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
