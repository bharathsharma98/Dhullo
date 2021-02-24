import React from "react";
import "./BoxComp.css";
 
let BoxComponent = (props) => {
 
 
  return (
    <div className="boxwithbutton">
      <h1 style={{textAlign:'center'}} >{props.category}</h1>
      <p>{props.text}</p>
      <div className="btnContainer">
        <button
          className="servicebookbutton"
          onClick={() => props.togglePress(props.category)
          }
        >
          BOOK
        </button>
      </div>
    </div>
  );
};
export default BoxComponent;
