import React, { useEffect } from "react";
//import Banner from './Banner/Banner'
//import Slider from './Slider/Slider'
import Slideview from "../../UI/Slider/Slideview";
import Homepage from "../../UI/PageComponents/HomePageComp";

const Home = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    props.click();
    console.log(props)
  }, []);
  return (
    <div className="w4">
      <Slideview click={props.click} />
      <Homepage click={props.click} />
    </div>
  );
};

export default Home;
