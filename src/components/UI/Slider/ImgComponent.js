import React from 'react'
function ImgComponent(props){

    let imgStyles = {
        width: "100%",
        height: "80vh"        
    }
    return (
        <div className="bg-lightest-green" >
            <img src = {props.imgComponent.imgSrc} alt= "slide-img" style ={imgStyles}></img>
            <h3>{props.imgComponent.description}</h3>
            <p>{props.imgComponent.details}</p>
            <button>Learn more</button>
        </div>
    );
}

export default ImgComponent;