import React from "react";
import carimage from '../../../Image/carinhand.png'
// import "./howitworks.css";

const HowItWorks2 = () => {
  return (
    <div class="timeline-container" id="timeline-1">
      <div class="timeline-header">
        <h3 class="timeline-header__subtitle">HOW IT WORKS</h3>
      </div>
      <div class="timeline">
        <h4 style={{textAlign:'center',marginLeft:'19rem'}}>SELECT OUR SERVICE</h4> 
        <img
          class="timeline__img"
          src={carimage}
        />
      </div>
      <div class="timeline">
        <h4 style={{textAlign:'center',marginRight:'19rem'}}>BOOK AN APPONTMENT</h4>
        <img
          class="timeline__img"
          src={carimage}
        />
      </div>
      <div class="timeline">
        <h4 style={{textAlign:'center',marginLeft:'20rem'}}>AGENT WILL REACH YOU</h4>
        <img
          class="timeline__img"
          src={carimage}
        />
      </div>
      <div class="timeline">
        <h4 style={{textAlign:'center',marginRight:'19rem'}}>RELAX</h4>
        <img
          class="timeline__img"
          src={carimage}
        />
      </div>
    </div>
  );
};

export default HowItWorks2;
