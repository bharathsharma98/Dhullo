import React from 'react';
import SmallTextComp from './smalltext';
import './howitworks.css';
import SmallImageContainer from './smallimagecontainer';

const HowItWorks = () => {
  return (
    <div className="parent">
      <div>
        <p>.......</p>
      </div>
      <div className="mixcontainer1">
        <SmallImageContainer />
        <SmallTextComp />
      </div>
      <div>
        <p>.......</p>
      </div>
      <div className="mixcontainer1">
        <SmallTextComp />
        <SmallImageContainer />
      </div>
      <div>
        <p>.......</p>
      </div>
      <div className="mixcontainer1">
        <SmallImageContainer />
        <SmallTextComp />
      </div>
    </div>
  );
};
export default HowItWorks;
