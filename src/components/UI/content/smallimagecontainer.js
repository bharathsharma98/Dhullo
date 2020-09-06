import React from 'react';
import carimage from '../../../Image/carinhand.png'
import './smallimagecontainer.css'
let SmallImageContainer=()=>{
    return(
        <div>
           <img classname="smallimageclass" src={carimage}></img>
        </div>
    )
}
export default SmallImageContainer;