import React, { Component } from "react";
//import Banner from './Banner/Banner'
//import Slider from './Slider/Slider'
import Slideview from "../../UI/Slider/Slideview";
import Homepage from "../../UI/content/homepage";
class Home extends Component {
  render() {
    return (
      <div className="w4">
        <Slideview />
        <Homepage />
      </div>
    );
  }
}

export default Home;
