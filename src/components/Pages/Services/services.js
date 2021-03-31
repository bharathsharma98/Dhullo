import React, { Component } from "react";
 
import Servicepage from "../../UI/PageComponents/ServicePageComp";
const services = (props) => {
  return (
    <div className="w4">
      <Servicepage click={props.click} />
    </div>
  );
};

export default services;
