import React from "react";
import "./ImgComp.css";
const MainImage =(props)=> {
 const width = { matches: window.matchMedia("(min-width: 768px)").matches };

  
    console.log(props.type);
    return (
      <div className="imgcontainer">
        <img
          className="img"
          src={props.type}
          alt={props.type}
          style={{
            height: !width.matches ? '15rem' : props.height,
            width: !width.matches ? '100%' : props.width,
            minWidth: !width.matches ? '100%' : props.minWidth,
            minHeight: !width.matches ? '5rem' : props.minHeight,
          }}
        ></img>
      </div>
    );
  
}
export default MainImage;
