import React from 'react';
import carimage from '../../../Image/carinhand.png'
import './imagecontainer.css'
let ImageContainer=()=>{
    return(
        <div>
           <img classname="imageclass" src={carimage}></img>
        </div>
    )
}
export default ImageContainer;