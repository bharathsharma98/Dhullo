import React from "react";
import "./ImgComp.css";
const MainImage =(props)=> {
 

  
    console.log(props.type);
    return (
      <div className="imgcontainer">
        <img className="img" src={props.type} alt={props.type} height="100%" width="100%"  ></img>
      </div>
    );
  
}
export default MainImage;
