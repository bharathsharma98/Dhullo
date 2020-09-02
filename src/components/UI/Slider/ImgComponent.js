import React from 'react'
import { findByLabelText } from '@testing-library/react';
import { Link } from 'react-router-dom';
function ImgComponent(props){

    let imgStyles = {
        width: "100%",
        height: "40vh",
        borderRadius:'3.5rem',
    
              
    }
    let CompStyles ={
        width: "90%",
        height: "40vh",  
        marginLeft:'5rem',
        marginRight:'5rem',
        marginTop:'2rem',
        display:"flex",
        border: '3px solid #026D70',
        borderRadius: '60px'

    }
    
    return (
        <div className="imagecomp"  style={CompStyles}>
            <Link>
            <img src = {props.imgComponent.imgSrc} alt= "slide-img" style ={imgStyles}></img>
            </Link>
            
            <h3 style={{fontSize:'280%',margin:'2rem'}}>{props.imgComponent.description}</h3>
            {/* <p style={{fontSize:'1rem',marginTop:'15rem'}}>{props.imgComponent.details}</p> */}
            
        </div>
    );
}

export default ImgComponent;