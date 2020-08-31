import React from 'react';

let ImageContainer=()=>{
    let imgstyles ={
        height:'15rem',
        margin:'5rem',
        width:'30rem'
    }
    return(
        <div>
           <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349" style={imgstyles}></img>
        </div>
    )
}
export default ImageContainer;