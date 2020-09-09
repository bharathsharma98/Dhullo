import React from 'react';
import carinhandimage from '../../../Image/carinhand.png';
import carfoamspray from '../../../Image/123.jpg';
import carsanitizationposter from '../../../Image/Car Sanitization Poster.png';
import carshine from '../../../Image/car shine.jpg';
import detailingimg from '../../../Image/detailing.png';
import inspectionimg from '../../../Image/inspection.png';
import interiorimg from '../../../Image/interior.jpg';
import sanitizationimg from '../../../Image/sanitization.png';
import washingimg from '../../../Image/washing.png';
import waterwasteimg from '../../../Image/water_waste.jpg';
export default class MainImage extends React.Component{
    constructor(props){
      super(props)
        this.state={
          imgtype: [
            {detailingimg:"detailingimg"}
          ]
        }
      
    }

    onTypeStateChange= (type) =>{
      this.setState({imgtype:type})
    }
   render(){
     return[
       <div>
          if({this.state.imgtype})===detailingimg{
            <CarFoamSprayImg />
          }
       </div>
     ]
   }
}


export const CarInHandImg = () => {
    return (
      <div>
        <img src={carinhandimage} alt='randomimg' />
       </div>
    );
  };

  export const CarFoamSprayImg = () => {
    return (
      <div>
        <img src={carfoamspray} alt='randomimg' />
       </div>
    );
  };

  export const  CarSanitizationPoster = () => {
    return (
      <div>
        <img src={carsanitizationposter} alt='randomimg' />
       </div>
    );
  };

  export const  CarShineImg = () => {
    return (
      <div>
        <img src={carshine} alt='randomimg' />
       </div>
    );
  };

  export const  DetailingImg = () => {
    return (
      <div>
        <img src={detailingimg} alt='randomimg' />
       </div>
    );
  };

  export const  InspectionImg = () => {
    return (
      <div>
        <img src={inspectionimg} alt='randomimg' />
       </div>
    );
  };

  export const  InteriorImg = () => {
    return (
      <div>
        <img src={interiorimg} alt='randomimg' />
       </div>
    );
  };

  export const  SanitizationImg = () => {
    return (
      <div>
        <img src={sanitizationimg} alt='randomimg' />
       </div>
    );
  };

  export const  WashingImg = () => {
    return (
      <div>
        <img src={washingimg} alt='randomimg' />
       </div>
    );
  };

  export const  WaterWasteImg = () => {
    return (
      <div>
        <img src={waterwasteimg} alt='randomimg' />
       </div>
    );
  };