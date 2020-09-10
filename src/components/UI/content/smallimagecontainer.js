import React from 'react';
import carimage from '../../../Image/carinhand.png'
import './smallimagecontainer.css'
let SmallImageContainer=()=>{
    let imagestyles={
        height:'10rem',
        width:'15rem',
        borderRadius:'10px',
        margin:'auto'
    }
    return(
        <div>
           <img classname="smallimageclass" src={carimage} style={imagestyles}></img>
        </div>
    )
}
export default SmallImageContainer;