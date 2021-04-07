import React, { Component } from "react";
 
import Servicepage from "../../UI/PageComponents/ServicePageComp";
const services = (props) => {
  return (
    <div   >
      <Servicepage click={props.click} />
    </div>
  );
};

export default services;
